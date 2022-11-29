import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Table from "./Table"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"


function App() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [billNumber, setbillNumber] = useState("")
  const [billDate, setbillDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState(0)


  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  
    useEffect(() => {
      if (window.innerWidth < width) {
        alert("Place your phone in landscape mode for the best experience")
      }
    }, [width])
  
    return (
      <>
        <div className="beta__tag">
          <p className="text-white font-bold uppercase tracking-widest">Beta</p>
        </div>
        <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start">
          <section>
            <div className="bg-white p-5 rounded shadow">
              {/* name, address, email, phone, bank name, bank account number, client name, client address, bill number, bill date, due date*/}
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name">Your full name</label>
                    <input
                      type="text"
                      name="text"
                      id="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="address">Enter your address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </article>
  
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Enter your email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="phone">Enter your phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </article>
  
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Enter your bank name</label>
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="Enter your bank name"
                      autoComplete="off"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">
                      Enter your bank account number
                    </label>
                    <input
                      type="text"
                      name="bankAccount"
                      id="bankAccount"
                      placeholder="Enter your bank account number"
                      autoComplete="off"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                    />
                  </div>
                </article>
  
                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Enter your client's name</label>
                    <input
                      type="text"
                      name="clientName"
                      id="clientName"
                      placeholder="Enter your client's name"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">
                      Enter your client's address
                    </label>
                    <input
                      type="text"
                      name="clientAddress"
                      id="clientAddress"
                      placeholder="Enter your client's address"
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />
                  </div>
                </article>
  
                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="billNumber">bill Number</label>
                    <input
                      type="text"
                      name="billNumber"
                      id="billNumber"
                      placeholder="bill Number"
                      autoComplete="off"
                      value={billNumber}
                      onChange={(e) => setbillNumber(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="billDate">bill Date</label>
                    <input
                      type="date"
                      name="billDate"
                      id="billDate"
                      placeholder="bill Date"
                      autoComplete="off"
                      value={billDate}
                      onChange={(e) => setbillDate(e.target.value)}
                    />
                  </div>
  
                  <div className="flex flex-col">
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      placeholder="bill Date"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </article>
  
                {/* This is our table form */}
                <article>
                  <TableForm
                    description={description}
                    setDescription={setDescription}
                    amount={amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                  />
                </article>

  
                {/* <button
                onClick={() => setShowbill(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview bill
              </button> */}
              </div>
            </div>
          </section>
  
          {/* bill Preview */}
          <div className="bill__preview bg-white p-5 rounded">
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
             
  
              <MainDetails name={name} address={address} />
  
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />
  
              <Dates
                billNumber={billNumber}
                billDate={billDate}
                dueDate={dueDate}
              />
  
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
  
            
            </div>
            {/* <button
              onClick={() => setShowbill(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button> */}
          </div>
        </main>
      </>
    )
  }
  
 