import QueryBuilder, { formatQuery } from 'react-querybuilder'
import './App.css'
import 'react-querybuilder/dist/query-builder.scss'
import { useEffect, useState } from 'react'
import {
	Grid,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Card,
	CardContent,
	Stack,
	Container,
} from '@mui/material'
import { fields } from './fields'
import { getOperators } from './getOperators'
import Table from './Table'

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
	const [displayType, setDisplayType] = useState('mongodb')
	const [data, setData] = useState([])

	const handleQueryChange = (q) => {
		setQuery(q)
	}

	const handleSubmit = () => {
		fetch('http://localhost:5000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ query: formatQuery(query, 'mongodb') }),
		})
			.then((res) => res.json())
			.then((res) => setData(res.results))
	}

	useEffect(() => {
		fetch('http://localhost:5000/')
			.then((res) => res.json())
			.then((res) => setData(res.products))
	}, [])

	return (
		<div className='App'>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid item sm={12}>
						<QueryBuilder
							fields={fields}
							onQueryChange={handleQueryChange}
							query={query}
							// getOperators={getOperators}
							// controlElements={{
							// 	combinatorSelector: CustomCombinatorSelector,
							// }}
							// showCloneButtons={true}
							// showLockButtons={true}
							// showNotToggle={true}
						/>
					</Grid>
					<Grid item sm={8}>
						<Card>
							<CardContent>
								<Typography variant='body1' component='pre'>
									{formatQuery(query, displayType)}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={4}>
						<Stack spacing={2}>
							<FormControl fullWidth>
								<InputLabel>Display type</InputLabel>
								<Select value={displayType} label='Display type' onChange={(e) => setDisplayType(e.target.value)}>
									<MenuItem value='sql'>SQL</MenuItem>
									<MenuItem value='json'>JSON</MenuItem>
									<MenuItem value='mongodb'>MongoDB</MenuItem>
								</Select>
							</FormControl>
							<Button variant='contained' fullWidth onClick={handleSubmit}>
								Submit
							</Button>
						</Stack>
					</Grid>
					<Grid item sm={12}>
						{data?.length > 0 && <Table data={data} />}
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
