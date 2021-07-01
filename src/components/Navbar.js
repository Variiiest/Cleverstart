import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
          <div>
         
       
          <header className="body-font bg-red-500">
            <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
              <a className="flex title-font font-extrabold items-center text-white mb-4 md:mb-0" href="#_">
                <span className="ml-3 text-3xl">Cleverstart</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                {/* Add Your Links */}
              </nav>
              <button className="inline-flex   hover:text-black items-center  transition ease-in-out border border-white-700 hover:bg-white focus:border-white-600 text-white font-semibold rounded px-4 py-3 text-base">Talk to sales
              </button>
            </div>
          </header>
          <div className="bg-cover bg-opacity-25" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1621593446047-4db277eef303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")'}}>
            <section className="w-full text-gray-800 bg-red-500 ">
              <div className="mx-auto max-w-full">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full bg-cover lg:w-6/12 xl:w-7/12 py-10">
                    <div className="flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                      <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div className>
                          <h2 className="text-5xl font-extrabold text-white xl:text-7xl tracking-tighter leading-relaxed">
                            Shape how the world’s leading brands deliver customer experiences at scale
                          </h2>
                        </div>
                        <a href="#_" className="inline-block text-center border border-white-700 hover:bg-white focus:bg-white hover:text-black text-white font-semibold rounded px-4 py-3 text-base">
                          Get Started Today
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-5/12">
                    <img className="object-cover object-center w-full h-full" src="https://ik.imagekit.io/vpa3fwqdnd/Group_31_5RYR6q0B3.png" alt="stats" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="text-gray-800 body-font ">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  A smart, all-in-one platform packed with engagement and analytics tools
                </h1>
              </div>
              <img className="lg:w-5/6 mb-10 object-cover object-center rounded bg-black max-h-screen" alt="hero" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            </div>
          </section>
          <section className="text-gray-800 body-font ">
            <div className="container mx-auto flex px-5 pb-10 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full pb-5">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  A smart, all-in-one platform packed with engagement and analytics tools
                </h1>
              </div>
              <div className="flex flex-wrap -mx-4 -mb-10">
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                  <p className="leading-relaxed text-base tracking-tighter">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
                  <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                  <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                </div>
                <div className="sm:w-1/2 mb-10 px-4">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502" />
                  </div>
                  <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
                  <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                </div>
              </div>
            </div>
          </section>
              </div>
        )
    }
}

export default Navbar
