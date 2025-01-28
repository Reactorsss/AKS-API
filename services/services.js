const sql = require('../config/connection')


module.exports = {

    serv_customer_registration : (data ,callBack) => {
        sql.query('call customers_create_1(?,?,?,?,?,?,?,?,?)', 
        [
            data.p_first_name,
            data.p_middle_name,
            data.p_last_name,
            data.p_suffix,
            data.p_mobile_no,
            data.p_passwordhash,
            data.p_is_registered_voter,
            data.p_referrer_id_no,
            data.p_ip_address,
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_login_session : (data ,callBack) => {
        sql.query('call customers_sessions_create(?,?,?)', 
        [
           data.p_mobile_no,
           data.p_passwordhash,
           data.p_ip_address
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_sel_login_session : (data ,callBack) => {
        sql.query('call customers_sessions_read(?)', 
        [
           data.p_session_token
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_otp_history_create : (data ,callBack) => {
        sql.query('call customers_otp_history_create(?,?,?)', 
        [
           data.p_otp_module,
           data.p_mobile_no,
           data.p_ip_address
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_otp_history_read : (data ,callBack) => {
        sql.query('call customers_otp_history_read(?,?,?,?)', 
        [
           data.p_otp_module,
           data.p_mobile_no,
           data.p_otp,
           data.p_ip_address,
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_update_password : (data ,callBack) => {
        sql.query('call customers_update_password(?,?,?)', 
        [
           data.p_mobile_no,
           data.p_passwordhash,
           data.p_ip_address
        ],
        (error, result) => {
        //    console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_user_levels_read: (callBack) => {
        sql.query('call user_levels_read()', (error, result) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, result);
        });
    },

    serv_users_create : (data ,callBack) => {
        sql.query('call users_create(?,?,?,?)', 
        [
            data.p_username,
            data.p_passwordhash,
            data.p_user_level,
            data.p_ip_address
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_users_read: (callBack) => {
        sql.query('call users_read()', (error, result) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, result);
        });
    },

    serv_admin_user_login_session : (data ,callBack) => {
        sql.query('call users_sessions_create(?,?,?)', 
        [
           data.p_username,
           data.p_passwordhash,
           data.p_ip_address
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_admin_user_sel_login_session : (data ,callBack) => {
        sql.query('call users_sessions_read(?)', 
        [
           data.p_session_token
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_user_admin_update_password : (data ,callBack) => {
        sql.query('call users_update_password(?,?,?)', 
        [
           data.p_username,
           data.p_passwordhash,
           data.p_ip_address
        ],
        (error, result) => {
        //    console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_users_update_status : (data ,callBack) => {
        sql.query('call users_update_status(?,?)', 
        [
           data.p_username,
           data.p_ip_address
        ],
        (error, result) => {
        //    console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customer_sel_by_id_no : (data ,callBack) => {
        sql.query('call customers_read_by_id_no(?,?)', 
        [
           data.p_id_no,
           data.p_ip_address
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_update_full : (data ,callBack) => {
        sql.query('call customers_update_full(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
        [
           data.p_id,
           data.p_birth_date,
           data.p_region,
           data.p_province_district,
           data.p_city_municipality,
           data.p_barangay,
           data.p_formatted_address,
           data.p_email_address,
           data.p_photo_path_name,
           data.p_group_type,
           data.p_chapter_type,
           data.p_volunteer_type,
           data.p_emergency_contact_name,
           data.p_emergency_contact_no,
           data.p_is_support,
           data.p_aks_source,
           data.p_gender,
           data.p_biker_solo,
           data.p_el_presidente,
           data.p_other_platforms,
           data.p_rider_group,
           data.p_toda,
           data.p_poda,
           data.p_e_trike,
           data.p_e_bike,
           data.p_industry_worker,
           data.p_informal_worker,
           data.p_passenger,
           data.p_precinct,
           data.p_ip_address
        ],
        (error, result) => {
        //    console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_photo_update : (data ,callBack) => {
        sql.query('call customers_photo_update(?,?)', 
        [
           data.p_customer_id,
           data.p_image_data,
        ],
        (error, result) => {
        //    console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_photo_read : (data ,callBack) => {
        sql.query('call customers_photo_read(?,?)', 
        [
           data.p_customer_id,
           data.p_ip_address
        ],
        (error, result) => {
           console.log(result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_1 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_1(?,?,?)', 
        [
            data.p_region,
            data.p_date_from,
            data.p_date_to
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_2 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_2(?,?,?)', 
        [
            data.p_region,
            data.p_date_from,
            data.p_date_to
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_3 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_3(?,?)', 
        [
            data.p_date_from,
            data.p_date_to
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },


    serv_customers_read_dashboard_4 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_4(?)', 
        [
            data.p_filter
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_update_full_2 : (data ,callBack) => {
        sql.query('call customers_update_full_2(?,?,?,?)', 
        [
            data.p_id,
            data.p_family_voters_count,
            data.p_student,
            data.p_ip_address
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_create_mmff : (data ,callBack) => {
        sql.query('call customers_create_mmff(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', 
        [
            data.p_first_name,
            data.p_middle_name,
            data.p_last_name,
            data.p_email_address,
            data.p_mobile_no,
            data.p_birth_date,
            data.p_passwordhash,
            data.p_is_registered_voter,
            data.p_referrer_id_no,
            data.p_region,
            data.p_province_district,
            data.p_city_municipality,
            data.p_barangay,
            data.p_formatted_address,
            data.p_ip_address,
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_create_1_direct : (data ,callBack) => {
        sql.query('call customers_create_1_direct(?,?,?,?,?,?,?,?,?)', 
        [
            data.p_first_name,
            data.p_middle_name,
            data.p_last_name,
            data.p_suffix,
            data.p_mobile_no,
            data.p_passwordhash,
            data.p_is_registered_voter,
            data.p_referrer_id_no,
            data.p_ip_address
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_search_referrer_info : (data ,callBack) => {
        sql.query('call customers_read_dashboard_search_referrer_info(?,?,?)', 
        [
            data.p_filter,
            data.p_referrer_id_no,
            data.p_referrer_name
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_search_1_direct : (data ,callBack) => {
        sql.query('call customers_read_dashboard_search_1_direct(?,?,?)', 
        [
            data.p_filter,
            data.p_referrer_id_no,
            data.p_referrer_name
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_search_1_indirect : (data ,callBack) => {
        sql.query('call customers_read_dashboard_search_1_indirect(?,?,?)', 
        [
            data.p_filter,
            data.p_referrer_id_no,
            data.p_referrer_name
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_2_v2 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_2_v2(?,?,?)', 
        [
            data.p_province,
            data.p_date_from,
            data.p_date_to
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_events_logs : (data ,callBack) => {
        sql.query('call events_logs(?,?)', 
        [
            data.p_date_from,
            data.p_date_to,
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },

    serv_customers_read_dashboard_4_1 : (data ,callBack) => {
        sql.query('call customers_read_dashboard_4_1(?)', 
        [
            data.p_filter
        ],
        (error, result) => {
        //    console.log("result", result)
            if(error){
                return callBack(error)
            }
            return callBack(null, result)
        })
    },
}

