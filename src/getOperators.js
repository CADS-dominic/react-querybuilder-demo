import { defaultOperators } from 'react-querybuilder'

export const getOperators = (field) => {
	switch (field) {
		case 'username':
			return [
				{ name: '=', label: 'là' },
				{ name: '!=', label: 'không phải là' },
				{ name: 'contains', label: 'chứa kí tự' },
				{ name: 'beginsWith', label: 'bắt đầu bằng' },
				{ name: 'endsWith', label: 'kết thúc bằng' },
				{ name: 'doesNotContain', label: 'không chứa' },
				{ name: 'doesNotBeginWith', label: 'không bắt đầu bằng' },
				{ name: 'doesNotEndWith', label: 'không kết thúc bằng' },
				{ name: 'null', label: 'rỗng' },
				{ name: 'notNull', label: 'không rỗng' },
			]
		default:
			return defaultOperators
	}
}
