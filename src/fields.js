export const fields = [
	{
		name: 'id',
		label: 'id',
		inputType: 'text',
	},
	{
		name: 'name',
		label: 'name',
		inputType: 'text',
	},
	{
		name: 'price',
		label: 'price',
		inputType: 'text',
	},
	{
		name: 'gender',
		label: 'Gender',
		valueEditorType: 'select',
		values: [
			{
				name: 'male',
				label: 'Male',
			},
			{
				name: 'female',
				label: 'Female',
			},
			{
				name: 'other',
				label: 'Other',
			},
		],
	},
	{
		name: 'phone',
		label: 'Phone number',
		inputType: 'number',
	},
	{
		name: 'variable1',
		label: 'Variable 1',
		valueSources: ['field', 'value'],
	},
]
