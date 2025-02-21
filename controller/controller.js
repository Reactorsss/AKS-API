const { 
    serv_customer_registration,
    serv_customer_login_session,
    serv_customer_sel_login_session,
    serv_customer_otp_history_create,
    serv_customer_otp_history_read,
    serv_customer_update_password,
    serv_admin_user_login_session,
    serv_user_levels_read,
    serv_users_create,
    serv_users_read,
    serv_admin_user_sel_login_session,
    serv_user_admin_update_password,
    serv_users_update_status,
    serv_customer_sel_by_id_no,
    serv_customers_update_full,
    serv_customers_photo_update,
    serv_customers_photo_read,
    serv_customers_read_dashboard_1,
    serv_customers_read_dashboard_2,
    serv_customers_read_dashboard_3,
    serv_customers_read_dashboard_4,
    serv_customers_update_full_2,
    serv_customers_create_mmff,
    serv_customers_create_1_direct,
    serv_customers_read_dashboard_search_referrer_info,
    serv_customers_read_dashboard_search_1_direct,
    serv_customers_read_dashboard_search_1_indirect,
    serv_customers_read_dashboard_2_v2,
    serv_events_logs,
    serv_customers_read_dashboard_4_1,
    serv_customers_sessions_read_by_mobile_no,
    serv_customers_sessions_read_scan
    
    
    } = require('../services/services');
    
    module.exports = {
    cont_customer_registration: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customer_registration(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_customer_login_session : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        //console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customer_login_session(data , (error, result) => {
                //console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customer_sel_login_session : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customer_sel_login_session(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customer_otp_history_create : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        //console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customer_otp_history_create(data , (error, result) => {
                //console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customer_otp_history_read : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customer_otp_history_read(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},
    
    cont_customer_update_password : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customer_update_password(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_user_levels_read: (req, res) => {
        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_user_levels_read((error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_users_create: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_users_create(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_users_read: (req, res) => {
        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_users_read((error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_admin_user_login_session : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        //console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_admin_user_login_session(data , (error, result) => {
                //console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_admin_user_sel_login_session : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_admin_user_sel_login_session(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_user_admin_update_password : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_user_admin_update_password(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_users_update_status : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_users_update_status(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customer_sel_by_id_no : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customer_sel_by_id_no(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_update_full : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_update_full(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

        cont_customers_photo_update: (req, res) => {
            const data = req.body;
            const value = "528LCQW2IF6W0QcFk6Ip";
            const x_a_s = req.header('x-auth');
        
            if (x_a_s === value) {
                if (data.p_image_data) {
                    if (Buffer.byteLength(data.p_image_data, 'base64') > 5 * 1024 * 1024) {
                        return res.status(400).json({
                            success: 0,
                            message: "File size exceeds the 5MB limit.",
                        });
                    }
        
                    try {
                        data.p_image_data = Buffer.from(data.p_image_data, 'base64');
                    } catch (error) {
                        return res.status(400).json({
                            success: 0,
                            message: "Invalid base64 data",
                        });
                    }
                }
        
                serv_customers_photo_update(data, (error, result) => {
                    if (error) {
                        return res.status(500).json({
                            success: 0,
                            message: error,
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        message: 'success',
                        data: result[0],
                    });
                });
            } else {
                res.status(401).json({
                    responseCode: 401,
                    responseStatus: "Authentication Failed",
                });
            }
        },
        

    cont_customers_photo_read : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customers_photo_read(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_read_dashboard_1 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_1(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},


    cont_customers_read_dashboard_2 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_2(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},


    cont_customers_read_dashboard_3 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_3(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},


    cont_customers_read_dashboard_4 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_4(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_update_full_2 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_update_full_2(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_create_mmff: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customers_create_mmff(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },


    cont_customers_create_1_direct: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customers_create_1_direct(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_customers_read_dashboard_search_referrer_info: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customers_read_dashboard_search_referrer_info(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },
    
    cont_customers_read_dashboard_search_1_direct: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customers_read_dashboard_search_1_direct(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_customers_read_dashboard_search_1_indirect: (req, res) => {
        const data = req.body;

        data.p_ip_address = req.socket.remoteAddress || req.connection.remoteAddress;

        const value = "528LCQW2IF6W0QcFk6Ip";
        const x_a_s = req.header('x-auth');

        if (x_a_s === value) {
            serv_customers_read_dashboard_search_1_indirect(data, (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: 0,
                        message: error
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: 'success',
                    data: result[0]
                });
            });
        } else {
            res.status(401).json({
                responseCode: 401,
                responseStatus: "Authentication Failed"
            });
        }
    },

    cont_customers_read_dashboard_2_v2 : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_2_v2(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},


    cont_events_logs : (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_events_logs(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_read_dashboard_4_1: (req, res) => {
        const data = req.body
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        // console.log(req.header('x-auth'));
        if (x_a_s == value){
            serv_customers_read_dashboard_4_1(data , (error, result) => {
                // console.log(result)
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},


    
    cont_customers_sessions_read_by_mobile_no : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customers_sessions_read_by_mobile_no(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    cont_customers_sessions_read_scan : (req, res) => {
        const data = req.query
        const value = "528LCQW2IF6W0QcFk6Ip";
        var x_a_s = req.header('x-auth');
        if (x_a_s == value){
            serv_customers_sessions_read_scan(data , (error, result) => {
                if (error){
                    return res.status(500).json({
                        success: 0,
                        message: error
                    })
                }
            return res.status(200).json({
                success: 1,
                message: 'success',
                data : result[0]
                })
            })
        } else {
            res.status(401).json({
                "responseCode" : 401,
                "responseStatus" : "Authentication Failes"
            });
            return;
        }},

    }