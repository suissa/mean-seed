Exec { 
  path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ]
}

exec { 'yum-update':
  command => '/usr/bin/yum -y update'
}

exec { 'yum-groupinstall': 
  command => '/usr/bin/yum -y groupinstall "Development Tools"',
  require => Exec['yum-update'],
}

exec { 'install_git': 
  command => '/usr/bin/yum -y install git',
  require => Exec['yum-update'],
}

class { 'mean':
  doc_root => '/vagrant',
}
