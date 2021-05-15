import React from 'react';

function UserAddress(props) {
    return (
        <div className="user-info">
            <h3>địa chỉ nhận hàng</h3>
            <form className="user-addr-form">
                <div className="form-group">
                    <label>Tỉnh / Thành phố</label>
                    <select className="form-control" name="province" >
                        <option>Hà Nội</option>
                        <option>TP. Hồ Chí Minh</option>
                        <option>Đà Nẵng</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Quận / Huyện / Thị xã</label>
                    <select className="form-control" name="distric">
                        <option>Đống Đa</option>
                        <option>Thanh Xuân</option>
                        <option>Hai Bà Trưng</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Phường / Xã</label>
                    <select className="form-control" name="ward">
                        <option>Ngã Tư Sở</option>
                        <option>Trung Liệt</option>
                    </select>
                </div>
                <button>Cập nhật</button>
            </form>
        </div>
    );
}

export default UserAddress;