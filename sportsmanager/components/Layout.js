export default function Layout() {
    return (
        <>
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action = "#" method = "POST" >
                            <div class="modal-header">						
                                <h4 class="modal-title">Add Employee</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">					
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="username" required></input>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="email" required></input>
                                </div>				
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" name="submit" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" class="btn btn-success" value="Add"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*<!-- Edit Modal HTML -->*/}
            <div id="editEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action = "#" method = "POST">
                            <div class="modal-header">						
                                <h4 class="modal-title">Edit Employee</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" name="updateId" class = "updateId" ></input>				
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control updateUsername" name = "username" required></input>
                                </div>
                                <div class="form-group">
                                    <label>password</label>
                                    <input type="text" class="form-control updatePassword" name = "password"  required></input>
                                </div>			
                            </div>
                            <div class="modal-footer">
                                <input type="button" name = "submit" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" class="btn btn-info" value="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container-xl">
	            <div class="table-responsive d-flex flex-column"></div>
            </div>
        </>
    )
}