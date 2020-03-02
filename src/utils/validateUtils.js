export default {

  // 18 位身份证
  checkId18(id) {
    let id18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z]|\d{3}[a-z])$/
    return id18.test(id)
  },

  // 手机号
  checkContactNumber11(contactNumber) {
    let contactNumber11 = /^1[3|4|5|7|8|9][0-9]{9}$/
    return contactNumber11.test(contactNumber)
  },
}
