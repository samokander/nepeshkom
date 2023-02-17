type email = string

interface InputRequest {
    filialId?: number;
    addititionalFilials?: Array<number>;
    dealTypeId?: number;
    source?: string;
    partnerCode?: number;
    clientPhone?: number;
    clientMail?: email;
    telegramAccount?: string;
    clientName?: string;
    clientComment?:string;
    Utm_source?:string;
    Utm_campaign?:string;
    Utm_medium?:string;
    Utm_term?:string;
    Utm_content?:string;
    Utm_position_type?: string;
    Utm_device_type?: string;
    Utm_region_name?: string;
    SessionId?:string;
    
}