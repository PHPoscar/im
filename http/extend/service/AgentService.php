<?php
/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 2020-07-07
 * Time: 18:04
 */

namespace extend\service;


use app\im\model\mongo\Find;

class AgentService
{
    /**
     * 获取网址列表
     */
    public static function getOnlineList(array $params){
       $list = Find::where(['agent_id'=>$params['agent_id'],'status'=>0])->select()->toArray();
       if(!$list)return JsonDataService::success();
       foreach ($list as &$v){
           $v['agent_user_id'] = $v['is_customer_service'] ?  $v['is_customer_service'][0] : 0 ;
       }
       return JsonDataService::success('网站列表',$list);
    }
}