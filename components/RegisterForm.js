import React from 'react'
import { Field, reduxForm } from 'redux-form'

class RegisterForm extends React.Component {

	handleSubmit (e) {
		console.log('submitform')
	}
	render() {
		return (
			<div className='registerForm'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='formfield'>
						<label>Họ Tên</label>
						<input placeholder='Họ Tên' />
					</div>
					<div className='formfield'>
						<label>Số Điện Thoại</label>
						<input placeholder='Số Điện Thoại' />
					</div>
					<div className='formfield'>
						<label>Email</label>
						<input placeholder='Số Điện Thoại' />
					</div>
				</form>
				<a href='javascript:;' className='button-ok'></a>
			</div>
		)
	}
}

export default reduxForm({
	form: 'register'
})(RegisterForm)
