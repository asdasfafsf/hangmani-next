import { NextApiRequest, NextApiResponse } from "next"

const rankList = Array.from({length: 20}, (elem, index) => {
    return {
        rank: 1,
        winCount: 10,
        storeName: '복권판매점 야탑점',
        thunbnail: '',
    }
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).json({code: 405, message: 'Method not allowed'});
    }

    const { rank } = req.query;

    if (rank == '1') {
        return res.status(200).json({data: rankList})
    } else {
        return res.status(200).json({data: rankList.map(elem => {
            return {
                rank: 2,
                winCount: 10,
                storeName: '복권판매점 야탑점',
                thunbnail: '',
            };
        })});
    }
}

export default handler;