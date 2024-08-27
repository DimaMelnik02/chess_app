import './Pieces.css'
import Piece from './Piece'

const Pieces = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))

    for (let i = 0; i < 8; i++){
        position[i][1] = 'wp'
        position[i][6] = 'bp'
    }

    position[0][0] = 'wr'
    position[1][0] = 'wn'
    position[2][0] = 'wb'
    position[3][0] = 'wq'
    position[4][0] = 'wk'
    position[5][0] = 'wb'
    position[6][0] = 'wn'
    position[7][0] = 'wr'

    position[0][7] = 'br'
    position[1][7] = 'bn'
    position[2][7] = 'bb'
    position[3][7] = 'bq'
    position[4][7] = 'bk'
    position[5][7] = 'bb'
    position[6][7] = 'bn'
    position[7][7] = 'br'


    console.log(position)

    return <div className='pieces'>
        {position.map((r,rank) => 
            r.map((f,file)=>
                position[rank][file] 
                ? 
                <Piece 
                    key={rank + '-' + file}
                    rank={rank} 
                    file={file} 
                    piece={position[rank][file]}/> 
                    : 
                    null    
        ))}
    </div>
}

export default Pieces