'use strict'
const env = {
    apiHeaders: {
        'https://api.gsa.gov/travel/perdiem/v2/': {
            'X-API-KEY':'Yem4zak8tqkefGwXNwYvO2R1ZkNoZedKpduDhyci'
        }
    },
    'PRIV_KEY':`-----BEGIN EC PRIVATE KEY-----
MIGkAgEBBDCWiqLcBCD1uUxZ8RdkvYkcwp5Ba0p+lAptBE1p61HpMh44pQCsnbZ1
aOT2WWMfvl2gBwYFK4EEACKhZANiAASqsuEqNHxdqKXPeDHUQns5QEGhaTjiQ+SW
m19iiaR9cASv24D1Nhs4O+0PgximKLCZUObfOnbDpAszV+mfqCBnC70VPCrnBrca
szoRABA4mJTZndDaWTImPZenuWfroqs=
-----END EC PRIVATE KEY-----`,
    'PUB_KEY':`-----BEGIN PUBLIC KEY-----
MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEqrLhKjR8Xailz3gx1EJ7OUBBoWk44kPk
lptfYomkfXAEr9uA9TYbODvtD4MYpiiwmVDm3zp2w6QLM1fpn6ggZwu9FTwq5wa3
GrM6EQAQOJiU2Z3Q2lkyJj2Xp7ln66Kr
-----END PUBLIC KEY-----`,
    'DBUN':'CIWI',
    'DBPASS':'CDnVWE76LdHRN4uqIq5nEMY5',
    'DBHOST':'localhost\\SQLDEV',
    'DATAB':'CIWI'
}
process.stdout.write(JSON.stringify(env))