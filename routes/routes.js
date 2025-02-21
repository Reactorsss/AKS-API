const { 
    cont_customer_registration,
    cont_customer_login_session,
    cont_customer_sel_login_session,
    cont_customer_otp_history_create,
    cont_customer_otp_history_read,
    cont_customer_update_password,
    cont_user_levels_read,
    cont_users_create,
    cont_users_read,
    cont_admin_user_login_session,
    cont_admin_user_sel_login_session,
    cont_user_admin_update_password,
    cont_users_update_status,
    cont_customer_sel_by_id_no,
    cont_customers_update_full,
    cont_customers_photo_update,
    cont_customers_photo_read,
    cont_customers_read_dashboard_1,
    cont_customers_read_dashboard_2,
    cont_customers_read_dashboard_3,
    cont_customers_read_dashboard_4,
    cont_customers_update_full_2,
    cont_customers_create_mmff,
    cont_customers_create_1_direct,
    cont_customers_read_dashboard_search_referrer_info,
    cont_customers_read_dashboard_search_1_direct,
    cont_customers_read_dashboard_search_1_indirect,
    cont_customers_read_dashboard_2_v2,
    cont_events_logs,
    cont_customers_read_dashboard_4_1,
    cont_customers_sessions_read_by_mobile_no,
    cont_customers_sessions_read_scan

} = require('../controller/controller')
const router = require('express').Router()

//Customer Create
router.post('/customer/create-customer', cont_customer_registration)
router.post('/customer/create/login/session', cont_customer_login_session)
router.post('/customer/create/otp/history', cont_customer_otp_history_create)
router.post('/customer/photo/upload', cont_customers_photo_update)
router.post('/customer/admin/read/dashboard1', cont_customers_read_dashboard_1)
router.post('/customer/admin/read/dashboard2', cont_customers_read_dashboard_2)
router.post('/customer/admin/read/dashboard3', cont_customers_read_dashboard_3)
router.post('/customer/admin/read/dashboard4', cont_customers_read_dashboard_4)
router.post('/customer/admin/read/dashboard2/v2', cont_customers_read_dashboard_2_v2)
router.post('/user/create-admin', cont_users_create)
router.post('/user/create-admin/mmff', cont_customers_create_mmff)
router.post('/user/customers_create_1_direct', cont_customers_create_1_direct)
router.post('/user/admin/create/login/session', cont_admin_user_login_session)
router.post('/customer/admin/read/dashboard/search/referrer/info', cont_customers_read_dashboard_search_referrer_info)
router.post('/customer/admin/read/dashboard/search/direct', cont_customers_read_dashboard_search_1_direct)
router.post('/customer/admin/read/dashboard/search/in-direct', cont_customers_read_dashboard_search_1_indirect)
router.post('/user/admin/read/events/logs', cont_events_logs)
router.post('/customer/admin/read/dashboard4/v1', cont_customers_read_dashboard_4_1)

router.get('/customer/read/customer/by/session', cont_customer_sel_login_session)
router.get('/customer/read/otp/history', cont_customer_otp_history_read)
router.get('/customer/read/user/level', cont_user_levels_read)
router.get('/customer/read/user/admins', cont_users_read)
router.get('/customer/read/session/by/mobile/no', cont_customers_sessions_read_by_mobile_no)
router.get('/customer/read/session/by/scan', cont_customers_sessions_read_scan)
router.get('/customer/photo/read', cont_customers_photo_read)
router.get('/user/read/admins/by/session', cont_admin_user_sel_login_session)
router.get('/customer/read/by/id/no', cont_customer_sel_by_id_no)

router.patch('/customer/update/password', cont_customer_update_password)
router.patch('/user/admin/update/password', cont_user_admin_update_password)
router.patch('/user/admin/update/status', cont_users_update_status)
router.patch('/customer/update/full/details', cont_customers_update_full)
router.patch('/customer/update/full/details/2', cont_customers_update_full_2)

module.exports = router

