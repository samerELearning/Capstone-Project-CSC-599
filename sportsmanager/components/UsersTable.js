export default function UsersTable() {
    return (
        <>
        <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"></input>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Name</th>
						<th>Email</th>
						<th>Id</th>
						<th>Sport</th>
						<th>Team</th>
						<th>Size</th>
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
						<td>Student1</td>
						<td>Student1@lau.edu</td>
						<td>202001460</td>
						<td>basketball</td>
						<td>A</td>
						<td>M</td>
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
						<td>Student2</td>
						<td>Student2@lau.edu</td>
						<td>202101460</td>
						<td>Table Tennis</td>
						<td>A</td>
						<td>S</td>
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
						<td>Student3</td>
						<td>Student3@lau.edu</td>
						<td>202302450</td>
						<td>Football</td>
						<td>A</td>
						<td>L</td>
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
						<td>Student4</td>
						<td>Student4@lau.edu</td>
						<td>201439450</td>
						<td>basketball</td>
						<td>B</td>
						<td>XL</td>
						<td>
							<a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
				</tbody>
			</table>
        </>
    )
}