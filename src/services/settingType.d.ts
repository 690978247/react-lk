export namespace LAPI {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type RuleListItem = {
        deptId:string,
        deptName?:string,
        parentDeptId:0,
        parentDeptName?:null,
        level?:number,
        sort?:number,
        disableFlag?: number,
        createTime?:number,
        updateTime?:number,
        updateByName?:string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type searchForm = {
        pageNum?:number,
        size?:number,
        nickNameLike?:string,
        mobileLike?:string,
        emailLike?:string,
        userName?:string,
        userIds?:[],
        deptId?:string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type modalForm = {
        userName:string,
        mobile:string,
        nickName:string,
        deptIds?:any,
        status: string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type tableListForm = {
        userId:string
        userName?:string,
        nickName?:string,
        mobile?:string,
        roleNames?:[string]
        mobile?:string,
        // nickName?:string,
        deptIds?:any,
        roleIds?:any,
        id?:string,
        deptNames?:[string],
        statusDesc?:string,
        status?: number,
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type PageParams = {
        userName?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type departmentItem = {
        deptId?: number
        parentDeptId?: number,
        sort?: number,
        deptName?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    
}
