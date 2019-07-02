const zooData = [
    // functionalities
    {
        "category": "functionality",
        "name": "Anonymous Transmission",
        "id": "anon_tran",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Anonymous_Transmission",
        "implemented_by": ["ghz_q_anon_tran", "veri_q_anon_tran"]
    }, {
        "category": "functionality",
        "name": "Bit Commitment",
        "id": "bit_comm",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Bit_Commitment",
        "implemented_by": ["q_bit_comm"]
    }, {
        "category": "functionality",
        "name": "Byzantine Agreement",
        "id": "byza_agre",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Byzantine_Agreement",
        "implemented_by": ["fast_q_byza_agre"]
    }, {
        "category": "functionality",
        "name": "Coin Flipping",
        "id": "coin_flip",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Coin_Flipping",
        "implemented_by": ["q_coin_flip"]
    }, {
        "category": "functionality",
        "name": "Digital Signature",
        "id": "digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Digital_Signature",
        "implemented_by": ["gott_chua_q_digi_sign", "prep_meas_q_digi_sign", "meas_devi_inde_q_digi_sign", "arbi_q_digi_sign", "blin_dele_q_digi_sign"]
    }, {
        "category": "functionality",
        "name": "Fingerprinting",
        "id": "fing",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Fingerprinting",
        "implemented_by": ["q_fing"]
    }, {
        "category": "functionality",
        "name": "Identity Authentication",
        "id": "iden_auth",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Identity_Authentication",
        "implemented_by": []
    }, {
        "category": "functionality",
        "name": "Key Distribution",
        "id": "key_dist",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Key_Distribution",
        "implemented_by": ["bb84_q_key_dist", "devi_inde_q_key_dist"]
    }, {
        "category": "functionality",
        "name": "Leader Election",
        "id": "lead_elec",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Leader_Election",
        "implemented_by": ["q_lead_elec"]
    }, {
        "category": "functionality",
        "name": "Money",
        "id": "mone",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Money",
        "implemented_by": ["q_cheq", "q_coin", "q_toke", "weis_q_mone"]
    }, {
        "category": "functionality",
        "name": "Oblivious Transfer",
        "id": "obli_tran",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Oblivious_Transfer",
        "implemented_by": ["q_obli_tran"]
    }, {
        "category": "functionality",
        "name": "Secure Client-Server Delegated Computation",
        "id": "secu_clie_serv_dele_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Client-_Server_Delegated_Computation",
        "implemented_by": ["clas_full_homo_encr_q_circ", "meas_only_univ_blin_q_comp", "prep_send_q_full_homo_encr", "prep_send_univ_blin_q_comp", "pseu_secr_rand_qubi_gene"]
    }, {
        "category": "functionality",
        "name": "Secure Delegated Classical Computation",
        "id": "secu_dele_clas_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Delegated_Classical_Computation",
        "implemented_by": ["secu_clie_serv_clas_dele_comp", "secu_mult_dele_clas_comp"]
    }, {
        "category": "functionality",
        "name": "Secure Multiparty Delegated Computation",
        "id": "secu_mult_dele_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Multi-Party_Delegated_Computation",
        "implemented_by": ["secu_mult_dele_clas_comp", "secu_mult_dele_q_comp"]
    }, {
        "category": "functionality",
        "name": "Secure Verifiable Client-Server Delegated Computation",
        "id": "secu_veri_clie_serv_dele_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Verifiable_Client-Server_Delegated_Quantum_Computation",
        "implemented_by": ["meas_only_veri_univ_blin_q_comp", "prep_send_veri_q_full_homo_encr", "prep_send_veri_univ_blin_q_comp"]
    },

    // nodal subroutines
    {
        "category": "nodal_subroutine",
        "name": "Classical Processing",
        "id": "clas_proc"
    }, {
        "category": "nodal_subroutine",
        "name": "Error Correction",
        "id": "erro_corr"
    }, {
        "category": "nodal_subroutine",
        "name": "One Way Function",
        "id": "one_way_func",
        "has_subtype": ["c_q_one_way_func", "q_q_one_way_func"]
    }, {
        "category": "nodal_subroutine",
        "name": "Classical to Quantum One Way Function",
        "id": "c_q_one_way_func"
    }, {
        "category": "nodal_subroutine",
        "name": "Quantum to Quantum One Way Function",
        "id": "q_q_one_way_func"
    }, {
        "category": "nodal_subroutine",
        "name": "Privacy Amplification",
        "id": "priv_ampl"
    }, {
        "category": "nodal_subroutine",
        "name": "Quantum One Time Pad",
        "id": "q_one_time_pad"
    }, {
        "category": "nodal_subroutine",
        "name": "Quantum SWAP Test",
        "id": "q_swap_test"
    }, {
        "category": "nodal_subroutine",
        "name": "Random Number Generator",
        "id": "rand_numb_gene"
    },

    // physicial resources
    {
        "category": "physical_resource",
        "name": "Classical Channel",
        "id": "clas_chan",
        "has_subtype": ["clas_chan_broa", "clas_chan_secu", "clas_chan_erro_free", "clas_chan_auth"]
    }, {
        "category": "physical_resource",
        "name": "Classical Channel (Broadcast)",
        "id": "clas_chan_broa"
    }, {
        "category": "physical_resource",
        "name": "Classical Channel (Secure)",
        "id": "clas_chan_secu"
    }, {
        "category": "physical_resource",
        "name": "Classical Channel (Error Free)",
        "id": "clas_chan_erro_free"
    }, {
        "category": "physical_resource",
        "name": "Classical Channel (Authenticated)",
        "id": "clas_chan_auth"
    }, {
        "category": "physical_resource",
        "name": "Measurement",
        "id": "meas",
        "has_subtype": ["sing_qubi_meas", "mult_qubi_meas"]
    }, {
        "category": "physical_resource",
        "name": "Single Qubit Measurement",
        "id": "sing_qubi_meas"
    }, {
        "category": "physical_resource",
        "name": "Multi Qubit Measurement",
        "id": "mult_qubi_meas"
    }, {
        "category": "physical_resource",
        "name": "Quantum Channel",
        "id": "quan_chan",
        "has_subtype": ["quan_chan_broa", "quan_chan_secu", "quan_chan_auth"]
    }, {
        "category": "physical_resource",
        "name": "Quantum Channel (Broadcast)",
        "id": "quan_chan_broa"
    }, {
        "category": "physical_resource",
        "name": "Quantum Channel (Secure)",
        "id": "quan_chan_secu"
    }, {
        "category": "physical_resource",
        "name": "Quantum Channel (Authenticated)",
        "id": "quan_chan_auth"
    }, {
        "category": "physical_resource",
        "name": "Quantum Memory",
        "id": "quan_memo",
        "has_subtype": []
    }, {
        "category": "physical_resource",
        "name": "State Preparation",
        "id": "stat_prep",
        "has_subtype": ["sing_qubi_stat_prep", "mult_qubi_stat_prep"]
    }, {
        "category": "physical_resource",
        "name": "Single Qubit State Preparation",
        "id": "sing_qubi_stat_prep"
    }, {
        "category": "physical_resource",
        "name": "Multi Qubit State Preparation",
        "id": "mult_qubi_stat_prep",
        "has_subtype": ["sepa_mult_qubi_stat_prep", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "physical_resource",
        "name": "Separable Multi Qubit State Preparation",
        "id": "sepa_mult_qubi_stat_prep"
    }, {
        "category": "physical_resource",
        "name": "Non Separable Multi Qubit State Preparation",
        "id": "non_sepa_mult_qubi_stat_prep"
    }, {
        "category": "protocol",
        "name": "BB84 Quantum Key Distribution",
        "id": "bb84_q_key_dist",
        "uri": "https://wiki.veriqloud.fr/index.php?title=BB84_Quantum_Key_Distribution",
        "requires": ["erro_corr", "rand_numb_gene", "priv_ampl", "quan_chan", "clas_chan_auth", "sing_qubi_meas", "sing_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Blind Delegation of Quantum Digital Signature",
        "id": "blin_dele_q_digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Blind_Delegation_of_Quantum_Digital_Signature",
        "requires": ["clas_proc", "clas_chan_auth", "high_capa_mult_qubi_enta_q_key_dist"]
    }, {
        "category": "protocol",
        "name": "Device-Independent Quantum Key Distribution",
        "id": "devi_inde_q_key_dist",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Device-Independent_Quantum_Key_Distribution",
        "requires": ["clas_proc", "erro_corr", "rand_numb_gene", "priv_ampl", "quan_chan", "clas_chan_auth", "sing_qubi_meas", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Fast Quantum Byzantine Agreement",
        "id": "fast_q_byza_agre",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Fast_Quantum_Byzantine_Agreement",
        "requires": ["quan_obli_comm_coin", "clas_chan", "clas_proc"]
    }, {
        "category": "protocol",
        "name": "GHZ-based Quantum Anonymous Transmission",
        "id": "ghz_q_anon_tran",
        "uri": "https://wiki.veriqloud.fr/index.php?title=GHZ-based_Quantum_Anonymous_Transmission",
        "requires": ["clas_coll_dete", "anon_enta", "clas_logi_or", "quan_chan", "non_sepa_mult_qubi_stat_prep", "sing_qubi_meas", "clas_chan_broa"]
    }, {
        "category": "protocol",
        "name": "Gottesman and Chuang Quantum Digital Signature",
        "id": "gott_chua_q_digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Gottesman_and_Chuang_Quantum_Digital_Signature",
        "requires": ["rand_numb_gene", "c_q_one_way_func", "q_swap_test", "quan_memo", "quan_chan_auth", "clas_chan_auth"]
    }, {
        "category": "protocol",
        "name": "Measurement-Only Universal Blind Quantum Computation",
        "id": "meas_only_univ_blin_q_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Measurement-Only_Universal_Blind_Quantum_Computation",
        "requires": ["gate_tele", "quan_chan", "clas_chan", "sing_qubi_meas", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Measurement-Only Verifiable Universal Blind Quantum Computation",
        "id": "meas_only_veri_univ_blin_q_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Measurement-Only_Verifiable_Universal_Blind_Quantum_Computation",
        "requires": ["quan_chan", "quan_memo", "sing_qubi_meas", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Prepare and Measure Quantum Digital Signature",
        "id": "prep_meas_q_digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare_and_Measure_Quantum_Digital_Signature",
        "requires": ["clas_proc", "quan_memo", "quan_chan_auth", "clas_chan_auth", "sing_qubi_meas", "sing_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Prepare-and-Send Quantum Fully Homomorphic Encryption",
        "id": "prep_send_q_full_homo_encr",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare-and-Send_Quantum_Fully_Homomorphic_Encryption",
        "requires": ["rand_numb_gene", "q_one_time_pad", "quan_chan", "mult_qubi_meas", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Prepare-and-Send Universal Blind Quantum Computation",
        "id": "prep_send_univ_blin_q_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare-and-Send_Universal_Blind_Quantum_Computation",
        "requires": ["rand_numb_gene", "clas_proc", "clas_chan", "quan_chan", "sing_qubi_meas", "sing_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Prepare-and-Send Verifiable Universal Blind Quantum Computation",
        "id": "prep_send_veri_univ_blin_q_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare-and-Send_Verifiable_Universal_Blind_Quantum_Computation",
        "requires": ["rand_numb_gene", "q_one_time_pad", "clas_proc", "clas_chan", "quan_chan", "sing_qubi_meas", "sing_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Quantum Bit Commitment",
        "id": "q_bit_comm",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Bit_Commitment",
        "requires": ["quan_chan", "sing_qubi_stat_prep", "sing_qubi_meas", "clas_chan_secu"]
    }, {
        "category": "protocol",
        "name": "Quantum Cheque",
        "id": "q_cheq",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Cheque",
        "requires": ["key_dist", "digi_sign", "secr_shar", "rand_numb_gene", "q_swap_test", "c_q_one_way_func", "quan_chan_secu", "clas_chan_auth", "sing_qubi_meas", "mult_qubi_meas", "non_sepa_mult_qubi_stat_prep", "quan_memo"]
    }, {
        "category": "protocol",
        "name": "Quantum Coin",
        "id": "q_coin",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Coin",
        "requires": ["rand_numb_gene", "clas_chan_auth", "mult_qubi_meas", "sepa_mult_qubi_stat_prep", "quan_memo"]
    }, {
        "category": "protocol",
        "name": "Quantum Coin Flipping",
        "id": "q_coin_flip",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Coin_Flipping",
        "requires": ["rand_numb_gene", "quan_memo", "quan_chan", "sepa_mult_qubi_stat_prep", "mult_qubi_meas"]
    }, {
        "category": "protocol",
        "name": "Quantum Leader Election",
        "id": "q_lead_elec",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Leader_Election",
        "requires": ["bala_q_coin_flip", "unba_q_coin_flip"]
    }, {
        "category": "protocol",
        "name": "Quantum Oblivious Transfer",
        "id": "q_obli_tran",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Oblivious_Transfer",
        "requires": ["clas_proc", "erro_corr", "quan_chan", "sing_qubi_stat_prep", "sing_qubi_meas", "clas_chan_erro_free"]
    }, {
        "category": "protocol",
        "name": "Secure Multiparty Delegated Classical Computation",
        "id": "secu_mult_dele_clas_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare-and-Send_Verifiable_Universal_Blind_Quantum_Computation",
        "requires": ["rand_numb_gene", "clas_proc", "clas_chan_secu", "quan_chan", "sing_qubi_meas", "sing_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Secure Multiparty Delegated Quantum Computation",
        "id": "secu_mult_dele_q_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Multiparty_Delegated_Quantum_Computation",
        "requires": ["veri_secr_shar", "rand_numb_gene", "q_one_time_pad", "clas_proc", "quan_memo", "quan_chan", "sing_qubi_meas", "non_sepa_mult_qubi_stat_prep"]
    }, {
        "category": "protocol",
        "name": "Verifiable Quantum Anonymous Transmission",
        "id": "veri_q_anon_tran",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Verifiable_Quantum_Anonymous_Transmission",
        "requires": ["quan_chan", "non_sepa_mult_qubi_stat_prep", "sing_qubi_meas", "clas_chan_broa", "clas_chan_auth", "rand_numb_gene", "clas_proc"]
    }, {
        "category": "protocol",
        "name": "Weisner Quantum Money",
        "id": "weis_q_mone",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Wiesner_Quantum_Money",
        "requires": ["rand_numb_gene", "sing_qubi_meas", "sing_qubi_stat_prep", "quan_memo"]
    },
    
    
    {
        "category": "missing protocol",
        "name": "Measurement Device Independent Quantum Digital Signature",
        "id": "meas_devi_inde_q_digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Measurement_Device_Independent_Quantum_Digital_Signature_(MDI-QDS)",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Arbitrated Quantum Digital Signature",
        "id": "arbi_q_digi_sign",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Arbitrated_Quantum_Digital_Signature",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Quantum Fingerprinting",
        "id": "q_fing",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Fingerprinting",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Quantum Token",
        "id": "q_toke",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Quantum_Token",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Classical Fully Homomorphic Encryption for Quantum Circuits",
        "id": "clas_full_homo_encr_q_circ",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Classical_Fully_Homomorphic_Encryption_for_Quantum_Circuits",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Pseudo-Secret Random Qubit Generator (PSQRG)",
        "id": "pseu_secr_rand_qubi_gene",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Pseudo-Secret_Random_Qubit_Generator_(PSQRG)",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Secure Client-Server Classical Delegated Computation",
        "id": "secu_clie_serv_clas_dele_comp",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Secure_Client-Server_Classical_Delegated_Computation",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Prepare-and-Send Verifiable Quantum Fully Homomorphic Encryption",
        "id": "prep_send_veri_q_full_homo_encr",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Prepare-and-Send_Verifiable_Quantum_Fully_Homomorphic_Encryption",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "High Capacity Mutli Qubit Entangled Quantum Key Distribution",
        "id": "high_capa_mult_qubi_enta_q_key_dist",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Quantum Oblivious Common Coin",
        "id": "quan_obli_comm_coin",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Classical Collision Detection",
        "id": "clas_coll_dete",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Classical Logical OR",
        "id": "clas_logi_or",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Balanced Quantum Coin Flipping",
        "id": "bala_q_coin_flip",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Unbalanced Quantum Coin Flipping",
        "id": "unba_q_coin_flip",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Anonymous Entanglement",
        "id": "anon_enta",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Verifiable Secret Sharing",
        "id": "veri_secr_shar",
        "uri": "",
        "requires": []
    }, {
        "category": "missing protocol",
        "name": "Gate Teleportation",
        "id": "gate_tele",
        "uri": "https://wiki.veriqloud.fr/index.php?title=Gate_Teleporation",
        "requires": []
    },

    {
        "category": "missing functionality",
        "name": "Secret Sharing",
        "id": "secr_shar",
        "uri": "",
        "requires": []
    }

];
