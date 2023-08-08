import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '@/stores/authContext'
import { logout } from 'netlify-identity-widget'
import Layout from '@/components/Layout'
import Head from 'next/head'
import UsersTable from '@/components/UsersTable'
import Pagination from '@/components/Pagination'

export default function uniforms() {
    return (
        <>
            <Head>
                <title>Uniform Management</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="Adding Uniforms"/>
                <meta name="author" content = "samersaber" />
                <meta name="og:url" content = "https://www.linkedin.com/in/samer-saber-6a8a241aa/" />
            </Head>
            <main>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Add Uniform</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Sport</label>
                                    <input type="text" className="form-control" name="sport" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Code</label>
                                    <input type="text" className="form-control" name="code" required></input>
                                </div>
								<div className="form-group">
                                    <label>Size Range</label>
                                    <input type="text" className="form-control" name="sizerange" required></input>
                                </div>
								<div className="form-group">
                                    <label>Color</label>
                                    <input type="text" className="form-control" name="color" required></input>
                                </div>
								<div className="form-group">
                                    <label>Quantity</label>
                                    <input type="number" className="form-control" name="color" min={0} required></input>
                                </div>
								<div className="form-group">
                                    <label>Cost</label>
                                    <input type="number" className="form-control" name="code" min={0} required></input>
                                </div>				
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" name="submit" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-success" value="Add"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!-- Edit Modal HTML -->*/}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Edit Uniform</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="updateId" className = "updateId" ></input>				
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control up
                                    dateUsername" name = "username" required></input>
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input type="text" className="form-control updatePassword" name = "password"  required></input>
                                </div>			
                            </div>
                            <div className="modal-footer">
                                <input type="button" name = "submit" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-info" value="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-xl">
	            <div className="table-responsive d-flex flex-column">
                    <div className="alert w-50 align-self-center alert-success alert-dismissible fade show" role="alert">
                        Uniforms Added successfully
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title">
				            <div className="row">
					            <div className="col-sm-6">
						            <h2>Uniform <b>Management</b></h2>
					            </div>
					            <div className="col-sm-6">
						            <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Uniform</span></a>
						            <a href="#" className="delete_all_data btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
						            <input type = "text" className = "form-control" style ={{width : '200px', float : 'right', height : '34px'}} name = "search_user" placeholder = "Search a uniform..." />
					            </div>
				            </div>
			            </div>
                        <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"></input>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Sport</th>
						<th>Code</th>
						<th>Size range</th>
						<th>Color</th>
						<th>Quantity</th>
						<th>Cost</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
                        <input type="hidden" id="userId" name="id" value = "" ></input>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value=""></input>
								<label for="data_checkbox"></label>
							</span>
						</td>
						<td>BasketBall Jersey</td>
						<td>FBHLM001</td>
						<td> S, M, L, XL</td>
						<td>Yellow</td>
						<td>80</td>
						<td>5$</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
					<tr>
                        <input type="hidden" id="userId" name="id" value = "" ></input>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value=""></input>
								<label for="data_checkbox"></label>
							</span>
						</td>
						<td>Type2</td>
						<td>Code2</td>
						<td> S, M, L, XL</td>
						<td>Color2</td>
						<td>Quantity2</td>
						<td>Cost2</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
					<tr>
                        <input type="hidden" id="userId" name="id" value = "" ></input>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value=""></input>
								<label for="data_checkbox"></label>
							</span>
						</td>
						<td>Type3</td>
						<td>Code3</td>
						<td> S, M, L, XL</td>
						<td>Color3</td>
						<td>Quantity3</td>
						<td>Cost3</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
					<tr>
                        <input type="hidden" id="userId" name="id" value = "" ></input>
						<td>
							<span className="custom-checkbox">
								<input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value=""></input>
								<label for="data_checkbox"></label>
							</span>
						</td>
						<td>Type4</td>
						<td>Code4</td>
						<td> S, M, L, XL</td>
						<td>Color4</td>
						<td>Quantity4</td>
						<td>Cost4</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
			</table>
                        <Pagination/>
                        
                    </div>
                </div>
            </div>
            </main>
            
        </>
    )
}