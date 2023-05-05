export default function Navbr() {
    return (
        <>
        <div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>NextJS-MySQL <b>CRUD</b></h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
						<a href="#" class="delete_all_data btn btn-danger"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>						
						<input type = "text" class = "form-control" style = "width : 200px;float : right; height :34px;" name = "search_user" placeholder = "Search a username..." />
					</div>
				</div>
			</div>
        </>
    )
}