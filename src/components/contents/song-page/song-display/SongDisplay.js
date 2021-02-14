import { useParams } from "react-router-dom";

export default function SongDisplay() {
    const { id } = useParams();

    return (
        <div>
            SONG NUMBER {id}
        </div>
    );
}