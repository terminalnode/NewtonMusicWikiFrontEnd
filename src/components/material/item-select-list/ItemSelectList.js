import './ItemSelectList.css';
import { Box, TextField, Tooltip, Typography } from "@material-ui/core";
import { useState } from 'react';

export default function ItemSelectList({
  items,
  itemType,
  preSelectedItems,
  clickAction,
  preSelectedClickAction,
}) {
    const [ filterText, setFilterText ] = useState("");
    const preSelectedItemIds = preSelectedItems
        ? preSelectedItems.map(x => x.id)
        : [];

    const filterTextLabel = "Filter " + itemType;

    return(
        <div>
            <TextField
                style={{ paddingBottom: '0.3rem' }}
                label={filterTextLabel}
                variant='filled'
                onChange={ x => setFilterText(x.target.value) }
            />

            <Box display="flex" flexWrap="wrap">
                { items.map(item => {
                if (!item.name.toLowerCase().includes(filterText.toLowerCase())) {
                return null;
                }

                const isSelected = preSelectedItemIds.includes(item.id);
                const action = isSelected ? preSelectedClickAction : clickAction;

                return (<ItemClicker
                    item={ item }
                    clickAction={ action }
                    isSelected={ isSelected }
                />);
                })}
            </Box>
        </div>
    ); 
}

function ItemClicker({item, clickAction, isSelected}) {
    if (!item || !item.name) {
      return null;
    }
  
    return (
      <Tooltip title={ isSelected ? "Click to remove!" : "Click to add!" }>
        <div
          className={ isSelected ? "ItemClickerSelected" : "ItemClicker" }
          onClick={ clickAction ? () => clickAction(item) : null }
        >
          <Typography>{ item.name }</Typography>
        </div>
      </Tooltip>
    );
  }