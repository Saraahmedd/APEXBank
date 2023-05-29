import React from 'react'
import Footer from '../../components/client/Footer'
import Navbar from '../../components/client/Navbar'
import Message from '../../components/client/Message';

const UserProfileScreen = () => {
	const [message,setMessage] = React.useState("");
    const [success,setSuccess] = React.useState('');
	const handleSubmit = () => {
    // Handle form submission
    // You can perform any necessary logic here
    setSuccess(true)
    setMessage('Account Updated Successfuly')
  };
  return (
<>
      <Navbar  loggedIn={true} />
    <div class="container">
       {message && <Message variant='success' showMessage={success} setShowMessage={setSuccess}>
                 {message}  
                </Message> }
<div class="row gutters">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
					<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
				</div>
				<h5 class="user-name">Abdullah Hatem</h5>
				<h6 class="user-email">abdullah@test.com</h6>
			</div>
			<div class="about">
				<h5>About</h5>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Personal Details</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" class="form-control" id="fullName" placeholder="Abdullah Hatem" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<input type="email" class="form-control" id="eMail" placeholder="abdullah@test.com" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="number" class="form-control" id="phone" placeholder="01099149449" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Emergency Phone</label>
					<input type="url" class="form-control" id="website" placeholder="01009880180" />
				</div>
			</div>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Street</label>
					<input type="name" class="form-control" id="Street" placeholder="Othman" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">City</label>
					<input type="name" class="form-control" id="ciTy" placeholder="Cairo" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="sTate">State</label>
					<input type="text" class="form-control" id="sTate" placeholder="Cairo" />
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="zIp">Zip Code</label>
					<input type="text" class="form-control" id="zIp" placeholder="0000" />
				</div>
			</div>
		</div>
		<div class="row gutters justify-content-center">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="text-right my-5 justify-content-center">
					{/* <button type="button"clas id="submit" name="submit" class="btn btn-secondary mx-3">Cancel</button> */}
					<button type="button" id="submit" name="submit" onClick={handleSubmit} class="btn btn-primary">Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
<br />

</div>
<Footer />
</>
   
  )
}

export default UserProfileScreen