export default {
	parseDate(date,formate) {
		if (date === '') {
			return '';
		}
		let tempDate = new Date(date);
		let year = tempDate.getFullYear();
		let month = (tempDate.getMonth() + 1).toString().padStart(2, '0');
		let day = (tempDate.getDate()).toString().padStart(2, '0');
		let hour = (tempDate.getHours()).toString().padStart(2, '0');
		let minute = (tempDate.getMinutes()).toString().padStart(2, '0');
		let second = (tempDate.getSeconds()).toString().padStart(2, '0');
		switch (formate){
			case 'Y*M*D*':
				// 2020年02月24日
				return `${year}年${month}月${day}日`;
			break;
			case 'y-m-d':
				// 2020-02-24
				return `${year}-${month}-${day}`;
			break;
			default:
				// 2020-02-24 16:41:45
				return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
			break;
		}
	},
}
