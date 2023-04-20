export default {
	filterProductsByParams: (data = get_products.data) => {
		let products = data;
		const categoryID = categorySelect.selectedOptionValue;
		const priceRange = priceSelect.selectedOptionValue;
		
		if(categoryID !== ''){
			products = products.filter(product => product.category_id === categoryID)
    }
		
		if(priceRange !== ''){
			products = products.sort((a, b) => {
				if(priceRange === '1'){
					if(a.price > b.price) return -1;
					if(a.price < b.price) return 1;
					return 0;
        }
				
				if(a.price < b.price) return -1;
				if(a.price > b.price) return 1;
				return 0;
				
			})
    }
		
		return products;
	},
	getOptionsCategory: () => {
		let categories = get_categories.data.map(category => ({label: category.name, value: category._id}))
		return categories;
	}
}