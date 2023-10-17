import React,{useState} from 'react';

function Page(){
    const [searchTerm, setSearchTerm] = useState("");
const arr=[
    {
        name:"Abstract 3D",stock:"32 in Stock",price:'$45', totalsale:'32'
    },
    {
        name:"Surphace 3D",stock:"38 in Stock",price:'$48', totalsale:'30'
    }
]
const searchedComments = arr.filter((c) =>
c.name.toLowerCase().includes(searchTerm.toLowerCase())
);
    return(
        <div>
            <div class="container-fluid">
             <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark leftside-menu">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/"
                        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                        id="menu">
                        <li class="nav-item">
                            <a href="#" class="nav-link align-middle px-0 active">
                             
                                <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Product</span></a>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                <i class="fs-4 bi-bootstrap"></i> <span
                                    class="ms-1 d-none d-sm-inline">Customer</span></a>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Income</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Promote</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col py-3 content-page">
                <div class="d-flex align-items-center justify-content-between pb-3">
                    <h3>Hello Shahrukh </h3>
                    <div class="form-group">
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <div class="box">
                            <img src="image/1.png" alt="Earning" />
                            <div class="info">
                                <label>Earning</label>
                                <span class="dollar">$198k</span>
                                <div class="percentage"><small class="gren">37.8% </small>this Month</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="box">
                            <img src="image/2.png" alt="Order" />
                            <div class="info">
                                <label>Order</label>
                                <span class="dollar">$198k</span>
                                <div class="percentage"><small class="red">37.8% </small>this Month</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="box">
                            <img src="image/3.png" alt="Balance" />
                            <div class="info">
                                <label>Balance</label>
                                <span class="dollar">$198k</span>
                                <div class="percentage"><small class="red">37.8% </small>this Month</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="box">
                            <img src="image/4.png" alt="Total Sale" />
                            <div class="info">
                                <label>Total Sale</label>
                                <span class="dollar">$198k</span>
                                <div class="percentage"><small class="green">37.8% </small>this Month</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="left-chat"><img width="100%" src="image/img1.png" /></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="right-chat"><img width="76%" src="image/img2.png" /></div>
                    </div>
                </div>

                <div class="table-view">
                    <div class="table_header d-flex justify-content-between align-items-center">
                        <h3>Product Sell</h3>
                        <div class="table-search d-flex justify-content-between align-items-center">
                            <input    onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}type="search" placeholder="search" class="form-control" />
                            <select class="form-control ms-2">
                                <option>last 30 Days</option>
                            </select>
                        </div>
                    </div>
                    <div class="table-">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total Sale</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                    {
                                        searchedComments.map((data)=>(
                                            <>
                                            <tr>
                                            <td >{data.name}</td>
                                            <td>{data.stock}</td>
                                            <td>{data.price}</td>
                                            <td>{data.totalsale}</td>
                                            </tr>
                                                
                                                </>
                                        ))
                                    }
                          
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Page