export const fields = [
	{
		name: 'username',
		label: 'Username',
		inputType: 'text',
	},
	{
		name: 'password',
		label: 'Password',
		inputType: 'text',
	},
	{
		name: 'address',
		label: 'Address',
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
