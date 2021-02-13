import { useParams } from "react-router-dom";

export default function AlbumDisplay() {
    const { id } = useParams();

    return (
        <div>
            ALBUM NUMBER {id}
        </div>
    );
}