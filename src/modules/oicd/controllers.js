import {ISSUER_URL} from "../../configs/env.js"
import ApiResponse from "../../utils/ApiResponse.js"

export const getOpenIdConfig = async (req, res)=>{
    const config = {
        issuer: `${ISSUER_URL}`,
        authorization_endpoint: `${ISSUER_URL}/oauth/v1/authorize`,
        token_endpoint: `${ISSUER_URL}/oauth/v1/token`,
        userinfo_endpoint: `${ISSUER_URL}/oauth/v1/userinfo`,
        jwks_uri: `${ISSUER_URL}/oauth/v1/certs`,
    }

    ApiResponse.ok(res, "Discovery endpoints", config)
}

export const getJwks = async (req, res)=>{}