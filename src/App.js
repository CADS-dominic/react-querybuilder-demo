import QueryBuilder, { formatQuery } from 'react-querybuilder'
import './App.css'
import 'react-querybuilder/dist/query-builder.scss'
import { useEffect, useState } from 'react'
import { Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { fields } from './fields'
import { getOperators } from './getOperators'

const CustomCombinatorSelector = ({ value, handleOnChange }) => {
	return (
		<FormControl sx={{ width: 200 }}>
			<InputLabel>Combinator</InputLabel>
			<Select value={value} defaultValue='and' label='Combinator' onChange={(e) => handleOnChange(e.target.value)}>
				<MenuItem value='and'>and</MenuItem>
				<MenuItem value='or'>or</MenuItem>
			</Select>
		</FormControl>
	)
}

function App() {
	const [query, setQuery] = useState({
		combinator: 'and',
		rules: [],
	})
	const [displayType, setDisplayType] = useState('sql')
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/')
			.then((res) => res.json())
			.then((res) => setData(res.admins))
	}, [])

	return (
		<div className='App'>
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<QueryBuilder
						fields={fields}
						onQueryChange={setQuery}
						query={query}
						getOperators={getOperators}
						controlElements={{
							combinatorSelector: CustomCombinatorSelector,
						}}
						showCloneButtons={true}
						showLockButtons={true}
						showNotToggle={true}
					/>
				</Grid>
				<Grid item sm={3}>
					<FormControl fullWidth>
						<InputLabel>Display type</InputLabel>
						<Select value={displayType} label='Display type' onChange={(e) => setDisplayType(e.target.value)}>
							<MenuItem value='sql'>SQL</MenuItem>
							<MenuItem value='json'>JSON</MenuItem>
							<MenuItem value='mongodb'>MongoDB</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item sm={9}>
					<Typography variant='body1' component='pre'>
						{formatQuery(query, displayType)}
					</Typography>
				</Grid>
				<Grid item sm={12}>
					{data &&
						data.map((element) =>
							Object.keys(element).map((key) => (
								<Typography variant='body2'>
									{key} = {element[key]}
								</Typography>
							))
						)}
				</Grid>
			</Grid>
		</div>
	)
}

export default App
