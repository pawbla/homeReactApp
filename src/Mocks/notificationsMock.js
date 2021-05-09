export const notificationsListResp = {
    "notifications": [
        {
            "read": false,
            "id": 1,
            "entity": {
                "create": "2021-03-17 19:16:27.084112",
                "id": 3,
                "entity_type_id": 1, //'New user registered'
                "message": "Nowy użytkownik: pawel został zarejestrowany.",
                "sender_id": 7
            }
        },
        {
            "read": true,
            "id": 2,
            "entity": {
                "create": "2020-03-12 00:01:00.0",
                "id": 4,
                "entity_type_id": 2, //'User deleted'
                "message": "Użytkownik o ID pawel został usunięty.",
                "sender_id": 8
            }
        },
        {
            "read": false,
            "id": 4,
            "entity": {
                "create": "2020-01-12 00:00:00.0",
                "id": 2,
                "entity_type_id": 3, //'Sensor error'
                "message": "Problem z odczytem danych z czujnika pogody",
                "sender_id": 6
            }
        },
        {
            "read": true,
            "id": 5,
            "entity": {
                "create": "2020-03-12 00:02:00.0",
                "id": 2,
                "entity_type_id": 4, //'Expired notification removed'
                "message": "Powiadomienie 123 zostało usunięte jako przestarzałe",
                "sender_id": 6
            }
        }
    ]
}

export const notificationsSizeResp = {
    "read": 1,
}
