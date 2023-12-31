import artistGroup from '../assets/group-avarts.png'
import badge from '../assets/badge.svg'
import style from './HomeInfo.module.scss'

export default function HomeInfo() {
    return (
        <div className='py-5 text-white d-flex justify-content-between align-items-center'>

            <div className='d-flex justify-content-center flex-column w-25'>
                <p className='fs- mb-0'>
                    Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
                    Compre, venda e descubra ativos digitais exclusivos para você.
                </p>

                <div className='d-flex mt-4 align-items-end' >
                    <img src={artistGroup} alt="grupo de artistas" />
                    <div className='d-flex flex-column'>
                        <p className='my-0 fw-bold'>+10</p>
                        <p className='my-0'>Artistas selecionados</p>
                    </div>
                </div>
            </div>

            <h1 className={style.mainText}>
                Descubra a verdadeira
                arte digital e colecione diversas <span className='text-danger'> NFTs</span>
            </h1>
            <div className='text-center'>
                <img src={badge} alt="" />
            </div>
        </div>
    )
}
