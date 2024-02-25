export function PlayerDetails({ player}) {
    return (
        <dialog open={player.id}> 
        <h2>{player.name}</h2>
        <img src={player.imageUrl} alt={player.name} width = {180} height = {150} />
        </dialog>
    );
}