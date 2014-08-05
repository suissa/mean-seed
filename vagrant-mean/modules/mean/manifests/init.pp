class mean(
  $doc_root = '/home/vagrant/'
  ){

  exec { 'install_node':
    command => '/usr/bin/yum -y install nodejs --enablerepo=epel'
  }

  exec { 'install_npm':
    command => '/usr/bin/yum -y install npm --enablerepo=epel',
    require => Exec['install_node'],
  }

  file {'/etc/yum.repos.d/mongodb.repo':
    ensure  => 'present',
    content => template('mean/mongodb.erb'),
    require => Exec['install_node'],
  }

  exec {'install_mongodb':
    command => '/usr/bin/yum -y install mongodb-org',
  }

  service {'mongod':
    ensure  => 'running',
    require => Exec['install_mongodb'],
  }
}
