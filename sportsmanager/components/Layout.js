import Alert from "./Alert"
import UsersTable from "./UsersTable"
import Pagination from "./Pagination"
import Navbr from "./Navbr"

export default function Layout() {
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Add Player</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="username" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" required></input>
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
                                <h4 className="modal-title">Edit Player</h4>
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
                        Players Added successfully
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title">
				            <div className="row">
					            <div className="col-sm-6">
						            <h2>Player <b>Management</b></h2>
					            </div>
					            <div className="col-sm-6">
						            <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Player</span></a>
						            <a href="#" className="delete_all_data btn btn-danger"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
						            <input type = "text" className = "form-control" style ={{width : '200px', float : 'right', height : '34px'}} name = "search_user" placeholder = "Search a username..." />
					            </div>
				            </div>
			            </div>
                        <UsersTable/>
                        <Pagination/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}