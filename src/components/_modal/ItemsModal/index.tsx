// 'use client'
// import React from 'react'

// const ItemModal = () => {

//   return (
//     <div className="">
//       <h1 className=" p-6 text-xl text-black font-bold">
//         { 'Add Item' }
//       </h1>
//       <hr />

//     </div>
//   )
// }

// export default ItemModal
import React, { useState } from 'react'
import { X, Settings } from 'lucide-react'
import { closeModal } from '@/redux/slices/modal'
import { useDispatch } from 'react-redux'
import FloatingInput from '@/components/ui/floating-input'

const AddItems = (
  {
    // showItem,
    // handleModelClose,
    // handleAddItems,
    // setShowItem,
    // isEdit,
    // currentItem,
  }
) => {


  const [isUnique, setIsUnique] = useState(true)
  console.log("🚀 ~ setIsUnique:", setIsUnique)
  const [tab, setTab] = useState(0)
  // const navigate = useNavigate()
  // const [primaryUnits, setPrimaryUnits] = useState()
  // const [secondaryUnits, setSecondaryUnits] = useState()
  const [isProduct, setIsProduct] = useState(true)
  const [unitDialogOpen, setUnitDialogOpen] = useState(false)
  const [primaryUnit, setPrimaryUnit] = useState('')
  const [secondaryUnit, setSecondaryUnit] = useState('')
  const [conversionRate, setConversionRate] = useState('1')
  const [updatedPrimaryUnits, setUpdatedPrimaryUnits] = useState([
    { name: 'BAGS' },
    { name: 'BOTTLES' },
    { name: 'BOX' },
    { name: 'BUNDLES' },
    { name: 'CANS' },
    { name: 'CARTONS' },
    { name: 'DOZENS' },
    { name: 'GRAMMES' },
    { name: 'KILOGRAMS' },
    { name: 'LITRE' },
    { name: 'MILLILITRE' },
    { name: 'NUMBERS' },
    { name: 'PACKS' },
    { name: 'PAIRS' },
    { name: 'PIECES' },
    { name: 'QUINTAL' },
    { name: 'ROLLS' },
    { name: 'SQUARE FEET' },
  ])
  console.log("🚀 ~ setUpdatedPrimaryUnits:", setUpdatedPrimaryUnits)

  const [updatedSecondaryUnits, setUpdatedSecondaryUnits] = useState([
    { name: 'BAGS' },
    { name: 'BOTTLES' },
    { name: 'BOX' },
    { name: 'BUNDLES' },
    { name: 'CANS' },
    { name: 'CARTONS' },
    { name: 'DOZENS' },
    { name: 'GRAMMES' },
    { name: 'KILOGRAMS' },
    { name: 'LITRE' },
    { name: 'MILLILITRE' },
    { name: 'NUMBERS' },
    { name: 'PACKS' },
    { name: 'PAIRS' },
    { name: 'PIECES' },
    { name: 'QUINTAL' },
    { name: 'ROLLS' },
    { name: 'SQUARE FEET' },
  ])
  console.log("🚀 ~ setUpdatedSecondaryUnits:", setUpdatedSecondaryUnits)

  const [addUnitDialogOpen, setAddUnitDialogOpen] = useState(false)
  const [newUnit, setNewUnit] = useState('')
  const [isAddingPrimaryUnit, setIsAddingPrimaryUnit] = useState(true)
  console.log("🚀 ~ setIsAddingPrimaryUnit:", setIsAddingPrimaryUnit)
  // const [userEmail, setUserEmail] = useState();

  // const handleAddNewUnit = async () => {
  //   if (!newUnit.trim()) return // Prevent empty input

  //   try {
  //     const existingDoc = await db.get(phone)

  //     if (!existingDoc) {
  //       toast.error('No record found for this phone number.')
  //       return
  //     }

  //     // Initialize units object if not present
  //     if (!existingDoc.units) {
  //       existingDoc.units = { primaryUnits: [], secondaryUnits: [] }
  //     }

  //     // Determine unit type (Primary/Secondary)
  //     const unitArray = isAddingPrimaryUnit
  //       ? existingDoc.units.primaryUnits
  //       : existingDoc.units.secondaryUnits

  //     // Check if the unit already exists
  //     const unitExists = unitArray.some(
  //       (unit) => unit.toLowerCase() === newUnit.toLowerCase()
  //     )

  //     if (unitExists) {
  //       toast.error('Unit already exists.')
  //       return
  //     }

  //     // Add new unit to the appropriate array
  //     if (isAddingPrimaryUnit) {
  //       existingDoc.units.primaryUnits.push(newUnit)
  //     } else {
  //       existingDoc.units.secondaryUnits.push(newUnit)
  //     }

  //     // Update database
  //     await db.put({ ...existingDoc })

  //     // Update UI state
  //     setPrimaryUnit(existingDoc.units.primaryUnits)
  //     setSecondaryUnit(existingDoc.units.secondaryUnits)

  //     toast.success('Unit added successfully!')
  //     handleAddUnitClose()
  //   } catch (error) {
  //     console.error('Error adding unit:', error)
  //     toast.error('Something went wrong. Please try again.')
  //   }
  // }

  const [addCategoryDialogOpen, setAddCategoryDialogOpen] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [formData, setFormData] = useState({
    itemName: '',
    itemHSN: '',
    categories: [],
    itemCode: '',
    quantity: {
      primary: '',
      secondary: '',
    },
    conversionRate: '',
    salePrice: '',
    primaryUnit: '',
    secondaryUnit: '',
    salePriceType: 'Without Tax',
    saleDiscount: '',
    saleDiscountType: 'Percentage',
    wholesalePrice: '',
    wholesalePriceType: 'Without Tax',
    minWholesaleQty: '',
    purchasePrice: '',
    purchasePriceType: 'Without Tax',
    taxRate: '',
    openingPrimaryQuantity: '',
    openingSecondaryQuantity: '',
    atPrice: '',
    asOfDate: '2024-12-23',
    minStockToMaintain: '',
    location: '',
  })


  // const handleInputChange = (field, value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };
  interface FormData {
    itemName: string;
    itemHSN: string;
    categories: string[];
    itemCode: string;
    quantity: {
      primary: string;
      secondary: string;
    };
    conversionRate: string;
    salePrice: string;
    primaryUnit: string;
    secondaryUnit: string;
    salePriceType: string;
    saleDiscount: string;
    saleDiscountType: string;
    wholesalePrice: string;
    wholesalePriceType: string;
    minWholesaleQty: string;
    purchasePrice: string;
    purchasePriceType: string;
    taxRate: string;
    openingPrimaryQuantity: string;
    openingSecondaryQuantity: string;
    atPrice: string;
    asOfDate: string;
    minStockToMaintain: string;
    location: string;
  }



  const handleInputChange = (field: keyof FormData, value: string): void => {
    console.log('🚀 ~ handleInputChange ~ value:', value);
    console.log('🚀 ~ handleInputChange ~ field:', field);
    let newValue: string = value;

    if (
      [
        'salePrice',
        'wholesalePrice',
        'saleDiscount',
        'purchasePrice',
        'atPrice',
      ].includes(field)
    ) {
      newValue = value.replace(/[^0-9.]/g, ''); // Allow only numbers and a single decimal point

      // Prevent multiple decimal points
      const dotCount = (newValue.match(/\./g) || []).length;
      if (dotCount > 1) {
        newValue = newValue.slice(0, newValue.lastIndexOf('.')); // Remove extra dots
      }
    } else if (
      [
        'openingPrimaryQuantity',
        'openingSecondaryQuantity',
        'minWholesaleQty',
        'minStockToMaintain',
      ].includes(field)
    ) {
      newValue = value.replace(/\D/g, ''); // Allow only whole numbers (no decimals)
    }

    // setFormData((prev: FormData) => ({
    //   ...prev,
    //   [field]: newValue,
    // }));

    // Clear only the error of the currently edited field
    // if (errors[field]) {
    //   setErrors((prev: Errors) => ({
    //     ...prev,
    //     [field]: '',
    //   }));
    // }
  };

  const handleTabChange = (newValue: React.SetStateAction<number>) => {
    setTab(newValue)
  }

  // const handleCheckItemName = async (itemName) => {
  //   try {
  //     const existingDoc = await db.get(phone)

  //     if (!existingDoc || !existingDoc.items) {
  //       return false
  //     }

  //     const itemExists = existingDoc.items.some(
  //       (item) => item.itemName.toLowerCase() === itemName.toLowerCase()
  //     )

  //     setIsUnique(!itemExists)
  //   } catch (error) {
  //     console.error('Error checking item name:', error)
  //     return false
  //   }
  // }

  const handleUnitDialogOpen = () => setUnitDialogOpen(true)
  const handleUnitDialogClose = () => setUnitDialogOpen(false)
  // const handleAddUnitOpen = (isPrimary = true) => {
  //   setIsAddingPrimaryUnit(isPrimary)
  //   setAddUnitDialogOpen(true)
  // }
  const handleAddUnitClose = () => {
    setAddUnitDialogOpen(false)
    setNewUnit('')
  }

  // const handleAddConversionRate = async () => {
  //   if (primaryUnit && conversionRate && secondaryUnit) {
  //     try {
  //       const existingDoc = await db.get(phone)

  //       if (!existingDoc.conversion) {
  //         existingDoc.conversion = []
  //       }

  //       // Get all existing conversions for same primaryUnit & secondaryUnit
  //       const matchingConversions = existingDoc.conversion.filter(
  //         (c) =>
  //           c.primaryUnit === primaryUnit && c.secondaryUnit === secondaryUnit
  //       )

  //       if (matchingConversions.length > 0) {
  //         // Calculate the average conversion rate of all duplicates
  //         const totalRate = matchingConversions.reduce(
  //           (sum, c) => sum + c.conversionRate,
  //           0
  //         )
  //         const avgRate =
  //           (totalRate + conversionRate) / (matchingConversions.length + 1)

  //         // Remove all existing duplicates
  //         existingDoc.conversion = existingDoc.conversion.filter(
  //           (c) =>
  //             !(
  //               c.primaryUnit === primaryUnit &&
  //               c.secondaryUnit === secondaryUnit
  //             )
  //         )

  //         // Add the merged conversion with the average rate
  //         existingDoc.conversion.push({
  //           primaryUnit,
  //           secondaryUnit,
  //           conversionRate: conversionRate,
  //         })
  //       } else {
  //         // Add new conversion if no duplicates exist
  //         existingDoc.conversion.push({
  //           primaryUnit,
  //           secondaryUnit,
  //           conversionRate,
  //         })
  //       }

  //       await db.put(existingDoc)

  //       setUnitDialogOpen(false)
  //     } catch (error) {
  //       console.error('Error updating conversion rate:', error)
  //     }
  //   }
  // }

  const handleAddCategoryOpen = () => setAddCategoryDialogOpen(true)
  const handleAddCategoryClose = () => {
    setAddCategoryDialogOpen(false)
    setNewCategory('')
  }

  // const handleCategoryChange = (event) => {
  //   const value = event.target.value
  //   handleInputChange(
  //     'categories',
  //     typeof value === 'string' ? value.split(',') : value
  //   )
  // }

  // const handleSave = () => {
  //   const savedData = {
  //     ...formData,
  //     isProduct,
  //     quantity: {
  //       primary: primaryUnit,
  //       secondary: secondaryUnit,
  //     },
  //     conversionRate,
  //     qty:
  //       (Number(formData?.openingPrimaryQuantity) || 0) *
  //         Number(conversionRate) +
  //       (Number(formData.openingSecondaryQuantity) || 0),
  //   }

  //   // console.log(savedData , "saveData")
  //   // handleAddItems(savedData)
  //   // handleModelClose()
  // }

  const generateUniqueCode = () => {
    const timestamp = Date.now().toString().slice(-6)
    const randomNum = Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, '0')
    return timestamp + randomNum
  }

  const handleAssignCode = () => {
    setFormData({
      ...formData,
      itemCode: generateUniqueCode(),
    })
  }

  // const handleSaveAndNew = () => {
  //   handleSave()
  //   setFormData({
  //     itemName: '',
  //     itemHSN: '',
  //     categories: [],
  //     itemCode: '',
  //     salePrice: '',
  //     salePriceType: 'Without Tax',
  //     saleDiscount: '',
  //     saleDiscountType: 'Percentage',
  //     wholesalePrice: '',
  //     wholesalePriceType: 'Without Tax',
  //     minWholesaleQty: '',
  //     purchasePrice: '',
  //     purchasePriceType: 'Without Tax',
  //     taxRate:
  //       taxRates.length > 0 ? `${taxRates[0].name} ${taxRates[0].rate}%` : '',
  //     openingPrimaryQuantity: '',
  //     atPrice: '',
  //     asOfDate: '2024-12-23',
  //     minStockToMaintain: '',
  //     location: '',
  //   })
  //   setPrimaryUnit('')
  //   setSecondaryUnit('')
  // }

  const dispatch = useDispatch()
  return (
    <div className="bg-white p-5 rounded-lg shadow h-[90vh]">
      {/* TOP HEADING CONTENT */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <p className=" font-semibold text-2xl">Add Item</p>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${
                isProduct ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              Product
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={!isProduct}
                onChange={() => setIsProduct(!isProduct)}
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span
              className={`text-sm ${
                !isProduct ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              Service
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Settings size={20} />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded"
            onClick={() => dispatch(closeModal())}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* FIRST ROW INPUT */}
        <div className="flex gap-4 items-start">
          <FloatingInput
            label={'Item Name'}
            required
            value={formData.itemName}
            onChange={(e) => handleInputChange('itemName', e.target.value)}
          />

          <FloatingInput
            label={'Item HSN'}
            value={formData.itemHSN}
            required
            onChange={(e) => handleInputChange('itemHSN', e.target.value)}
          />

          <div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              onClick={handleUnitDialogOpen}
            >
              Select Unit
            </button>
            {/* Text below the Select Unit button */}
            {primaryUnit && secondaryUnit && conversionRate && (
              <p className="text-xs mt-1 font-bold text-blue-800">
                1 {primaryUnit} = {conversionRate} {secondaryUnit}
              </p>
            )}
          </div>
        </div>
        {/* SECOND ROW INPUT */}
        <div className="flex gap-4">
          <button
            onClick={handleAddCategoryOpen}
            className="text-blue-600 text-sm hover:text-blue-700"
          >
            + Add New Category
          </button>

          <div className="relative">
            <FloatingInput
              label={'Item Code'}
              value={formData.itemCode}
              // disabled={isEdit}
              onChange={(e) => handleInputChange('itemCode', e.target.value)}
              required
            />
            {!formData.itemCode && (
              <button
                onClick={handleAssignCode}
                className=" absolute top-2 right-2.5 w-24 h-6 text-[11px] px-3 rounded-2xl  bg-blue-600 text-white"
              >
                Assign Code
              </button>
            )}
          </div>
        </div>
        {/* TAB SWITCHING SECTION */}
        <div className="border-b border-gray-200">
          <nav className="flex gap-4">
            <button
              className={`py-2 text-sm font-medium ${
                tab === 0
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabChange(0)}
            >
              Pricing
            </button>
            <button
              className={`py-2 text-sm font-medium ${
                tab === 1
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => handleTabChange(1)}
            >
              Stock
            </button>
          </nav>
        </div>
        {/* TAB 0 DATA */}
        {tab === 0 && (
          <div className="flex flex-col gap-4  ">
            {/* SALE PRICE SECTION */}
            <div className="bg-[#f9fafa] p-5 flex flex-col gap-6">
              <p className="text-sm font-semibold mb-1">Sale Price</p>
              <div className="flex  gap-6 ">
                <div className="flex">
                  <FloatingInput
                    label={'Sale Price'}
                    value={formData.salePrice}
                    onChange={(e) =>
                      handleInputChange('salePrice', e.target.value)
                    }
                  />
                  <select
                    className="px-3 py-2 w-[150px] border rounded text-sm focus:outline-none focus:border-blue-500"
                    value={formData.salePriceType}
                    onChange={(e) =>
                      handleInputChange('salePriceType', e.target.value)
                    }
                  >
                    <option value="Without Tax">Without Tax</option>
                    <option value="With Tax">With Tax</option>
                  </select>
                </div>
                <div className="flex">
                  <FloatingInput
                    label={'Discount on Sale price..'}
                    value={formData.saleDiscount}
                    onChange={(e) =>
                      handleInputChange('saleDiscount', e.target.value)
                    }
                  />
                  <select
                    className="px-3 w-[150px] py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    value={formData.saleDiscountType}
                    onChange={(e) =>
                      handleInputChange('saleDiscountType', e.target.value)
                    }
                  >
                    <option value="Percentage">Percentage</option>
                    <option value="Amount">Amount</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <FloatingInput
                  label={'Wholesale Price'}
                  value={formData.wholesalePrice}
                  onChange={(e) =>
                    handleInputChange('wholesalePrice', e.target.value)
                  }
                />
                <select
                  className="px-3 w-[170px] py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                  value={formData.wholesalePriceType}
                  onChange={(e) =>
                    handleInputChange('wholesalePriceType', e.target.value)
                  }
                >
                  <option value="Without Tax">Without Tax</option>
                  <option value="With Tax">With Tax</option>
                </select>
                <FloatingInput
                  label={'Minimum Wholesale Quantity'}
                  value={formData.minWholesaleQty}
                  onChange={(e) =>
                    handleInputChange('minWholesaleQty', e.target.value)
                  }
                />
              </div>
            </div>
           
            DIV
     

            <div className="flex gap-4">
              <div className="flex-1">
                <h6 className="text-sm font-semibold mb-2">Purchase Price</h6>
                <input
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500 mb-2"
                  placeholder="Purchase Price"
                  value={formData.purchasePrice}
                  onChange={(e) =>
                    handleInputChange('purchasePrice', e.target.value)
                  }
                />
                <select
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                  value={formData.purchasePriceType}
                  onChange={(e) =>
                    handleInputChange('purchasePriceType', e.target.value)
                  }
                >
                  <option value="Without Tax">Without Tax</option>
                  <option value="With Tax">With Tax</option>
                </select>
              </div>
              <div className="flex-1">
                <h6 className="text-sm font-semibold mb-2">Taxes</h6>
                <select
                  className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                  value={formData.taxRate}
                  onChange={(e) => handleInputChange('taxRate', e.target.value)}
                >
                  <option value="">Select Tax Rate</option>
                  {/* {taxRates.map((tax, index) => (
                    <option key={index} value={`${tax.name} ${tax.rate}`}>
                      {tax.name} {tax.rate}
                    </option>
                  ))} */}
                  <option value="Exempt">Exempt</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="flex flex-col gap-4">
            {/* First Row */}
            <div className="flex flex-col gap-1">
              {/* <label className="text-sm font-semibold">Opening Quantities & Price</label> */}
              <div className="flex gap-4">
                <div className="flex flex-col w-1/4">
                  <label className="text-sm font-semibold mb-1">
                    Opening Primary Quantity
                  </label>
                  <input
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Opening Primary Quantity"
                    value={formData.openingPrimaryQuantity}
                    onChange={(e) =>
                      handleInputChange(
                        'openingPrimaryQuantity',
                        e.target.value
                      )
                    }
                  />
                </div>

                <div className="flex flex-col w-1/4">
                  <label className="text-sm font-semibold mb-1">
                    Opening Secondary Quantity
                  </label>
                  <input
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Opening Secondary Quantity"
                    value={formData.openingSecondaryQuantity}
                    onChange={(e) =>
                      handleInputChange(
                        'openingSecondaryQuantity',
                        e.target.value
                      )
                    }
                  />
                </div>

                <div className="flex flex-col w-1/4">
                  <label className="text-sm font-semibold mb-1">At Price</label>
                  <input
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    placeholder="At Price"
                    value={formData.atPrice}
                    onChange={(e) =>
                      handleInputChange('atPrice', e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col w-1/4">
                  <label className="text-sm font-semibold mb-1">
                    As Of Date
                  </label>
                  <input
                    type="date"
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    value={formData.asOfDate}
                    onChange={(e) =>
                      handleInputChange('asOfDate', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col gap-1">
              {/* <label className="text-sm font-semibold">Stock & Location Details</label> */}
              <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                  <label className="text-sm font-semibold mb-1">
                    Min Stock To Maintain
                  </label>
                  <input
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Min Stock To Maintain"
                    value={formData.minStockToMaintain}
                    onChange={(e) =>
                      handleInputChange('minStockToMaintain', e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col w-1/2">
                  <label className="text-sm font-semibold mb-1">Location</label>
                  <input
                    className="px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange('location', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 mt-4 fixed bottom-[11px] w-[78%]">
        <button
          className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
          // onClick={handleSaveAndNew}
        >
          Save & New
        </button>
        <button
          className="px-4 py-2 disabled:bg-blue-200 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          // onClick={handleSave}
          disabled={!isUnique}
        >
          Save
        </button>
      </div>

      {/* Unit Selection Dialog */}
      {unitDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Select Units</h2>
            <div className="flex gap-2 justify-between">
              <div>
                <select
                  className="w-[195px] px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                  value={primaryUnit}
                  onChange={(e) => setPrimaryUnit(e.target.value)}
                >
                  <option value="">Select Primary Unit</option>
                  {updatedPrimaryUnits?.map((unit, index) => (
                    <option key={index} value={unit.name}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="w-[195px] px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
                  value={secondaryUnit}
                  onChange={(e) => setSecondaryUnit(e.target.value)}
                >
                  <option value="">Select Secondary Unit</option>
                  {updatedSecondaryUnits?.map((unit, index) => (
                    <option key={index} value={unit.name}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {secondaryUnit && (
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      1 {primaryUnit} ={' '}
                    </span>
                    <input
                      type="number"
                      className="w-20 mx-2 px-2 py-1 border rounded text-sm focus:outline-none focus:border-blue-500"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(e.target.value)}
                      placeholder="0"
                    />
                    <span className="text-sm font-medium">{secondaryUnit}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                onClick={handleUnitDialogClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                // onClick={handleAddConversionRate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Unit Dialog */}
      {addUnitDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Add New {isAddingPrimaryUnit ? 'Primary' : 'Secondary'} Unit
            </h2>
            <input
              className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
              placeholder={`New ${
                isAddingPrimaryUnit ? 'Primary' : 'Secondary'
              } Unit`}
              value={newUnit}
              onChange={(e) => setNewUnit(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                onClick={handleAddUnitClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                // onClick={handleAddNewUnit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Dialog */}
      {addCategoryDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
            <input
              className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-blue-500"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                onClick={handleAddCategoryClose}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                // onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddItems
