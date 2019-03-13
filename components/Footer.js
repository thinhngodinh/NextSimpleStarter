import React from 'react'
import StyledFooter from '../styled/StyledFooter'

const Footer = (props) => (
	<StyledFooter>
		<div>
			<div className='logo logo-tc'>
				<img src='/static/img/providerLogo.jpg' />
			</div>
			<div className='logo logo-vng'>
				<img src='/static/img/vng-logo.png' />
			</div>
			<div className='footer-info'>
				<p>
					Công Ty Cổ Phần VNG<br />
					Địa chỉ: Số 52, Nguyễn Ngọc Lộc, Phường 14, Quận 10, TP.HCM.<br />
					Giấy phép phê duyệt nội dung số: 56/QĐ-BTTTT cấp ngày 15/01/2019 do Bộ Thông Tin Và Truyền Thông cấp.
				</p>
			</div>
		</div>
	</StyledFooter>
)

export default Footer
