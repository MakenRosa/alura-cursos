import React from 'react';
import { Box, Button } from '../UI';
import { statementList } from '../../info';
import Items from '../Items';

const Statement = () => {
    return (
        <Box>
            {
                statementList.updates.map(({id, type, from, value, date}) => {
                    return (
                    <Items key={id} type={type} from={from} value={value} date={date} />
                    )
                })
            }
            <Button>See more</Button>
        </Box>
    )
}

export default Statement;