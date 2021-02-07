interface obfuscationOptions {
    DisableSuperOperators?:boolean
    MaximumSecurityEnabled?:boolean
    ControlFlowObfuscation?:boolean
    ConstantEncryption?:boolean
    EncryptAllStrings?:boolean
    DisableAllMacros?:boolean
    EnhancedOutput?:boolean
    EnhancedConstantEncryption?:boolean
    CompressedOutput?:boolean
    PremiumFormat?:boolean
    ByteCodeMode?:string
}

interface keyResponse {
    key:string,
    reqsleft:number,
    allowed:number,
    disabled:boolean,
    datemade:string
    id:number
    uid:number
    todaysreqs:number,
    totalreqs:number
}

export function obfuscate(key:string,script:string,options:obfuscationOptions): {status:"failed"|"success",script?:string,reason?:string}
export function checkKey(key:string):keyResponse