terraform {
  backend "s3" {
    bucket = "tan-thouless"
    key    = "dist01b/ovh/terraform.tfstate"
    region = "gra"

    endpoints = {
      s3 = "https://s3.gra.io.cloud.ovh.net/"
    }

    use_path_style              = true
    skip_credentials_validation = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum             = true
  }
}
