# -H means header
curl -H "apikey: 替换为PUBLISHABLE_KEY" \
     "https://项目ID.supabase.co/rest/v1/keep_live_ping?select=*"

curl -H "apikey: sb_publishable_SUw0yFl117ArRnW3qKOfbg_bRlTpdOc" \
     "https://egehivfmeoroomfurmda.supabase.co/rest/v1/public.keep_live_ping?select=*"

does not work

# google supabase curl
https://supabase.com/dashboard/project/egehivfmeoroomfurmda/api?resource=keep_alive_ping     
```
curl 'https://egehivfmeoroomfurmda.supabase.co/rest/v1/keep_alive_ping?select=*' \
-H "apikey: sb_publishable_SUw0yFl117ArRnW3qKOfbg_bRlTpdOc" \
-H "Authorization: Bearer sb_publishable_SUw0yFl117ArRnW3qKOfbg_bRlTpdOc"
```  

Work


# curl in browser
https://reqbin.com/curl
```
curl 'https://egehivfmeoroomfurmda.supabase.co/rest/v1/keep_alive_ping?select=last_ping' \
-H "apikey: sb_publishable_SUw0yFl117ArRnW3qKOfbg_bRlTpdOc" \
-H "Authorization: Bearer sb_publishable_SUw0yFl117ArRnW3qKOfbg_bRlTpdOc"
```

Work  

# Share it  
https://reqbin.com/c-c3h3t9s2
  
