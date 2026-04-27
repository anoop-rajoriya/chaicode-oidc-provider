export default class ApiResponse {
    static ok (res, message="Request succeeded", data=null){
        return res.status(200).josn({message, data})
    }
    
    static created (res, message="Request fullfilled", data=null){
        return res.status(201).josn({message, data})
    }

    static accepted (res, message="Request accepted", data=null){
        return res.status(202).josn({message, data})
    }

    static noContent (res, message="Request successful and no content", data=null){
        return res.status(204).josn({message, data})
    }
}