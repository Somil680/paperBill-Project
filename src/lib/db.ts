import sqlite3 from 'sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'paperBill.db')

const sqlite = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) console.error('DB error:', err.message)
    else console.log('Connected to SQLite DB.')
  }
)

type Insertable = Record<string, any>

function queryBuilder<T = any>(table: string) {
  let whereClause = ''
  let whereParams: any[] = []

  const builder = {
    insert: (data: Insertable): Promise<T> => {
      const keys = Object.keys(data)
      const placeholders = keys.map(() => '?').join(', ')
      const sql = `INSERT INTO ${table} (${keys.join(
        ', '
      )}) VALUES (${placeholders})`
      const values = keys.map((k) =>
        typeof data[k] === 'boolean' ? (data[k] ? 1 : 0) : data[k]
      )

      return new Promise((resolve, reject) => {
        sqlite.run(sql, values, function (err) {
          if (err) return reject(err)
          resolve(data as T)
        })
      })
    },

    select: (): Promise<T[]> => {
      const sql = `SELECT * FROM ${table} ${whereClause}`
      return new Promise((resolve, reject) => {
        sqlite.all(sql, whereParams, (err, rows: any) => {
          if (err) return reject(err)
          resolve(rows)
        })
      })
    },

    first: (): Promise<T | undefined> => {
      const sql = `SELECT * FROM ${table} ${whereClause} LIMIT 1`
      return new Promise((resolve, reject) => {
        sqlite.get(sql, whereParams, (err, row: any) => {
          if (err) return reject(err)
          resolve(row)
        })
      })
    },

    update: (data: Partial<T>) => {
      const keys = Object.keys(data)
      const setClause = keys.map((key: any) => `${key} = ?`).join(', ')
      const values = keys.map((k) => {
        const val = (data as Record<string, any>)[k]
        return typeof val === 'boolean' ? (val ? 1 : 0) : val
      })

      const sql = `UPDATE ${table} SET ${setClause} ${whereClause}`
      return new Promise((resolve, reject) => {
        sqlite.run(sql, [...values, ...whereParams], function (err) {
          if (err) return reject(err)
          resolve(this.changes)
        })
      })
    },

    delete: () => {
      const sql = `DELETE FROM ${table} ${whereClause}`
      return new Promise((resolve, reject) => {
        sqlite.run(sql, whereParams, function (err) {
          if (err) return reject(err)
          resolve(this.changes)
        })
      })
    },

    where: (column: string, value: any) => {
      whereClause = `WHERE ${column} = ?`
      whereParams = [value]
      return builder
    },
  }

  return builder
}

export const db = queryBuilder

const createItemsTable = `
CREATE TABLE IF NOT EXISTS items (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  hsnCode TEXT,
  itemType TEXT CHECK (itemType IN ('Product', 'Service')) NOT NULL,
  category TEXT,
  code TEXT,
  unit TEXT NOT NULL,
  imageUrl TEXT,

  salePrice REAL NOT NULL,
  salePriceTaxInclusive INTEGER NOT NULL CHECK (salePriceTaxInclusive IN (0, 1)),
  saleDiscount REAL,
  saleDiscountType TEXT CHECK (saleDiscountType IN ('percentage', 'amount')),
  wholesalePrice REAL,

  purchasePrice REAL NOT NULL,
  purchasePriceTaxInclusive INTEGER NOT NULL CHECK (purchasePriceTaxInclusive IN (0, 1)),

  taxRate REAL,

  primaryQuantity REAL,
  secondaryQuantity REAL,
  openingStockValue REAL,
  openingStockDate TEXT,
  lowStockLimit REAL,
  location TEXT,

  enableBatchTracking INTEGER CHECK (enableBatchTracking IN (0, 1)),
  batchNumber TEXT,
  expiryDate TEXT,
  mfgDate TEXT,
  modelNumber TEXT,
  size TEXT,
  serialNumber TEXT,

  mrp REAL,

  isActive INTEGER NOT NULL CHECK (isActive IN (0, 1)),
  allowNegativeStock INTEGER CHECK (allowNegativeStock IN (0, 1)),
  isFavorite INTEGER CHECK (isFavorite IN (0, 1)),

  customFields TEXT,

  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);
`
