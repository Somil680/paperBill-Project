'use client'

import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const unitOptions = ['None','pcs', 'kg', 'litre', 'box', 'meter']
const priceTypes = ['Without Tax', 'With Tax']
const taxTypes = ['None', 'GST', 'SGST']
const categoryOptions = ['None', 'Electronics', 'Clothing', 'Food', 'Furniture', 'Stationery']
const sizeOptions = ['None', 'S', 'M', 'L', 'XL', 'XXL']

export interface ItemRow {
  item: string
  qty: string
  unit: string
  priceType: string
  price: string
  taxType: string
  taxAmount: string
  amount: string
  category: string
  itemCode: string
  hsnCode: string
  serialNo: string
  description: string
  batchNo: string
  modelNo: string
  expDate: string
  mrp: string
  size: string
  discountPercent: string
  discountAmount: string
}

interface ItemTableProps {
  items: ItemRow[]
  onItemChange: (index: number, field: keyof ItemRow, value: string) => void
  onAddRow: () => void
  onDeleteRow: (index: number) => void
}

const ItemTable: React.FC<ItemTableProps> = ({
  items,
  onItemChange,
  onAddRow,
  onDeleteRow,
}) => {
  const [showRowNumbers, setShowRowNumbers] = useState(true)
  const [focusedRow, setFocusedRow] = useState<number | null>(null)

  return (
    <div className="mt-10 overflow-x-auto">
      <table className="w-full border border-gray-300 text-gray-700 text-xs">
        <thead className="bg-gray-100">
          <tr >
            <th
              rowSpan={2}
              className={`p-1 border border-gray-300 cursor-pointer ${
                showRowNumbers ? 'bg-green-200' : ''
              }`}
              onClick={() => setShowRowNumbers((prev) => !prev)}
              title="Click to toggle row numbers"
            >
              #
            </th>
            <th rowSpan={2} className="p-1 font-semibold  border border-gray-300">CATEGORY</th>
            <th rowSpan={2} className="p-1 font-semibold border  border-gray-300">ITEM</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">ITEM CODE</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">HSN CODE</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">SERIAL NO.</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">DESCRIPTION</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">BATCH NO.</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">MODEL NO.</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">EXP. DATE</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">QTY</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">UNIT</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">PRICE/UNIT</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">MRP</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">SIZE</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">Price Type</th>
            <th colSpan={2} className="p-1 font-semibold border border-gray-300 text-center">DISCOUNT</th>
            <th colSpan={2} className="p-1 font-semibold border border-gray-300 text-center">TAX</th>
            <th rowSpan={2} className="p-1 font-semibold border border-gray-300">Amount</th>
          </tr>
          <tr>
            <th className="p-1 border font-semibold border-gray-300">%</th>
            <th className="p-1 border font-semibold border-gray-300">Amount</th>
            <th className="p-1 border font-semibold border-gray-300">%</th>
            <th className="p-1 border font-semibold border-gray-300">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, index) => (
            <tr
              key={index}
              className={`group hover:bg-gray-50 transition-colors ${
                index % 2 === 1 ? 'bg-blue-50' : ''
              }`}
            >
              <td className="px-5 py-2 text-center relative border border-gray-300">
                {showRowNumbers && (
                  <>
                    {index + 1}
                    <button
                      type="button"
                      onClick={() => onDeleteRow(index)}
                      className="absolute top-1/2 -translate-y-1/2 right-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:cursor-pointer"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </>
                )}
              </td>

              {/* CATEGORY */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <select
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.category}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'category', e.target.value)}
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </td>

              {/* ITEM */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.item}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'item', e.target.value)}
                />
              </td>

              {/* ITEM CODE */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.itemCode}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'itemCode', e.target.value)}
                />
              </td>

              {/* HSN CODE */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.hsnCode}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'hsnCode', e.target.value)}
                />
              </td>

              {/* SERIAL NO. */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.serialNo}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'serialNo', e.target.value)}
                />
              </td>

              {/* DESCRIPTION */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.description}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'description', e.target.value)}
                />
              </td>

              {/* BATCH NO. */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.batchNo}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'batchNo', e.target.value)}
                />
              </td>

              {/* MODEL NO. */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="text"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.modelNo}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'modelNo', e.target.value)}
                />
              </td>

              {/* EXP. DATE */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="date"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.expDate}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'expDate', e.target.value)}
                />
              </td>

              {/* QTY */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.qty}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'qty', e.target.value)}
                />
              </td>

              {/* UNIT */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <select
                  className={`w-full   rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.unit}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'unit', e.target.value)}
                >
                  {unitOptions.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </td>

              {/* PRICE/UNIT */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.price}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'price', e.target.value)
                  }
                />
              </td>

              {/* MRP */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.mrp}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'mrp', e.target.value)}
                />
              </td>

              {/* SIZE */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <select
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.size}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) => onItemChange(index, 'size', e.target.value)}
                >
                  {sizeOptions.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </td>

              {/* PRICE TYPE */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <select
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.priceType}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'priceType', e.target.value)
                  }
                >
                  {priceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>

              {/* DISCOUNT % */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.discountPercent}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'discountPercent', e.target.value)
                  }
                />
              </td>

              {/* DISCOUNT AMOUNT */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.discountAmount}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'discountAmount', e.target.value)
                  }
                />
              </td>

              {/* TAX % */}
              <td className={`p-1 border border-gray-300  ${focusedRow === index ? 'border' : ''}`}>
                <select
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.taxType}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'taxType', e.target.value)
                  }
                >
                  {taxTypes.map((tax) => (
                    <option key={tax} value={tax}>
                      {tax}
                    </option>
                  ))}
                </select>
              </td>

              {/* TAX Amount */}
              <td className={`p-1 border border-gray-300  ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.taxAmount}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'taxAmount', e.target.value)
                  }
                />
              </td>

              {/* AMOUNT */}
              <td className={`p-1 border border-gray-300 ${focusedRow === index ? 'border' : ''}`}>
                <input
                  type="number"
                  className={`w-full px-2 py-2 rounded ${
                    focusedRow === index ? 'border' : 'border-transparent'
                  }`}
                  value={row.amount}
                  onFocus={() => setFocusedRow(index)}
                  onBlur={() => setFocusedRow(null)}
                  onChange={(e) =>
                    onItemChange(index, 'amount', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={onAddRow}
        className="mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-blue-600"
      >
        + Add Row
      </button>
    </div>
  )
}

export default ItemTable