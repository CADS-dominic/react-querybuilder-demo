import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function BasicTable({ data }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Brand</TableCell>
						<TableCell>Category</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((element, index) => {
						const _key = `row${index}`
						return (
							<TableRow key={_key}>
								<TableCell>{element._id}</TableCell>
								<TableCell>{element.name}</TableCell>
								<TableCell>{element.price}</TableCell>
								<TableCell>{element.brand}</TableCell>
								<TableCell>{element.category}</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
