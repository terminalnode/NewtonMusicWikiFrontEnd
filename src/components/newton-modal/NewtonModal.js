import { Backdrop, Box, Button, Container, makeStyles, Modal, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        borderRadius: 20,
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        background: 'grey',
        justifyContent: 'center',
        maxHeight: '90%',
        maxWidth: '90%',
        [theme.breakpoints.up('sm')]: {
          maxHeight: '50%',
          maxWidth: '50%',
        },
    }
}));

export default function NewtonModal({open, onClose, children}) {
    const classes = useStyles();

    return (
      <Modal
        open={ open }
        className={ classes.modal }
        onClose={ onClose }
        BackdropComponent={ Backdrop }
      >
        <div>
          {children}
        </div>
      </Modal>
    );
}