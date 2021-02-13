import { Backdrop, Box, Container, makeStyles, Modal, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        background: 'grey',
        justifyContent: 'center',
        maxHeight: '50%',
        maxWidth: '50%',
        //transform: 'translate(50%, 50%)'
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
          {children}
      </Modal>
    );
}