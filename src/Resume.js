import React from 'react';
import data from './data/data.json';
import profileIcon from './profile.svg';


let Resume=(prop)=>{
	let info=data.profiles[prop.location.data.id];
	return(

		<div className="row justify-content-center">
			<div className="col-lg-3">
				<div className="card shadow">
					<div className="card-body p-2">
							<img src={profileIcon} alt="profileIcon" style={{width:"30%"}}/>
							<h2>{info.basics.name}</h2>
							 <h5 className="text-secondary" style={{fontStyle:"italic"}}> {info.basics.role}</h5> <hr />

                				<a href={"mailto:"+info.basics.email}> {info.basics.email}</a> <br>
                				</br>
              					<a href={"tel:"+info.basics.mobile}> {info.basics.mobile}</a> <br />
								<p>{info.basics.address}</p>
					</div>
				</div>
			</div>	

			<div className="col-lg-6 m-2">
				 <div className="card shadow">
					<div className="card-body p-2">
						<h3>Summery</h3> <hr />
						<ul>
							{info.summery.map((SummeryValue,SummeryIndex)=>(
								<li key={SummeryIndex}>{SummeryValue}</li>
							))}
						</ul>
							<h3>Educatinal Qulifications</h3> <hr />
							<div className="table-responsive">
									<table className="table-bordered">
										<thead className="thead-dark">
											<tr>
												<th>Degree</th>
												<th>Institute</th>
												<th>percentage</th>

											</tr>
										</thead>	
										<tbody>
											{info.education.map((educationValue,educationIndex)=>(

												<tr>
													<td>{educationValue.degree}</td>
													<td>{educationValue.institute}</td>
													<td>{educationValue.result}</td>

												</tr>

										))}

											

										</tbody>

									</table>

								</div>
								





					</div>
				</div>

			</div>
		</div>	

		)


}
export default Resume;