import { Backdrop, Box, Container, makeStyles, Modal, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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