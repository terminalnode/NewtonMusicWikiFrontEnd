import { useParams } from "react-router-dom";

export default function SongDisplay() {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            SONG NUMBER {id}
        </div>
    );
}