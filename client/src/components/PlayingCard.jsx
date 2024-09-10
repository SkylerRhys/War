import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PlayingCard () {
    return (
        <div>
            <Card sx={{ width: 275, height: 300 }}>
                <CardContent>
                    <Typography>Ace ♠️ ❤️ ♣️ ♦</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default PlayingCard;